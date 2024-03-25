import Conversation from "../models/conversation.model.js";
import Message from "../models/mesage.model.js";
import { getRecieverSocketId, io } from "../socket/socket.js";

export const sendMessage = async(req,res) => {
    try {
        const {message} = req.body;
        const  {id:recieverId} = req.params;
        const senderId = req.user._id;

      let conversation =  await Conversation.findOne({
            participants: {$all: [senderId, recieverId]},

        })

        if(!conversation){
            conversation = await Conversation.create({
                participants:[senderId,recieverId],
            })
        }

          const newMessage = new Message({
            senderId, 
            recieverId, 
            message,
          })

          if(newMessage){
            conversation.messages.push(newMessage._id);
          }
        //   await conversation.save();
        //   await newMessage.save();
        await Promise.all([conversation.save(),newMessage.save()])
       
        // Socket io functionality
         const recieverSocketId = getRecieverSocketId(recieverId);
         if(recieverSocketId){
          io.to(recieverSocketId).emit("newMessage", newMessage)
         }

        res.status(201).json(newMessage);

    } catch (error) {
        console.log("error in sendmessage controller", error.message);
        res.status(500).json({error: "internal sever error"});
    }
};

export const getMessages = async(req, res) => {
  try {
    const {id:userToChatId} = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: {$all: [senderId,userToChatId ]},
    }).populate("messages"); //not refrences but actual messages

  if(!conversation) return res.status(200).json([]);

  const messages = conversation.messages;

  res.status(200).json(messages);

  } catch (error) {
    console.log("error in getMessage controller", error.message);
    res.status(500).json({error: "Internal server error"});
  }
}