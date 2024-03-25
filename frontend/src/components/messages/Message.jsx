
import {useAuthContext} from '../../context/AuthContext';
import { extractTime } from '../../utilis/extractTime';
import useConversation from '../../Zustandstore/useConversation';


const Message = ({message}) => {

    const {authUser} = useAuthContext();
    const {selectedConversation} =  useConversation();
    const fromMe = message.senderId === authUser._id;
    const formattedTime = extractTime(message.createdAt);
    const chatClassName = fromMe ? "chat-end" : 'chat-start';
    const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
    const bubbleBgColor = fromMe ? 'bg-green-500': "";
  

  return (
    <div className={`chat ${chatClassName}`}>
        <div className="chat-image avatar">
            <div className="w-10 rounded-full">
                <img src={profilePic}></img>
            </div>
        </div>
       <div className={`chat-bubble text-white ${bubbleBgColor} pb-2`}>{message.message}</div>
       <div className='chat-footer opacity-50 text-xs text-gray-700 flex gap-1 items-center'>{formattedTime}</div>
    </div>
  )
}

export default Message



// import userpic from './up.jpg';

// const Message = () => {
//   return (
//     <div className="chat chat-end">
//         <div className="chat-image avatar">
//             <div className="w-10 rounded-full">
//                 <img src={userpic}></img>
//             </div>
//         </div>
//        <div className={`chat-bubble text-white bg-green-500`}>Hi! What is upp?</div>
//        <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>!2:00</div>
//     </div>
//   )
// }

// export default Message
