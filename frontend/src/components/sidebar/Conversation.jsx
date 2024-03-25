import useConversation from "../../Zustandstore/useConversation"
import { useSocketContext } from "../../context/SocketContext";

const Conversation = ({conversation,lastIdx,emoji}) => {
  const {selectedConversation, setSelectedConversation} = useConversation();

  const isSelcted = selectedConversation?._id === conversation._id;
  
  const {onlineUsers} = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id)

  return (
    < >
      <div className={`flex gap-2 items-center hover:bg-green-500 rounded p-2 py-1 cursor-pinter 
      ${isSelcted ? "bg-green-500" : ""}
      `}
      onClick={() => setSelectedConversation(conversation)}>
        <div className={`avatar ${isOnline ? "online": ""}`}>
            <div className="w-12 rounded-full">
                <img src={conversation.profilePic} alt="profilepic"/>
            </div>
        </div>
        <div className='flex flex-col flex-1'>
            <div className='flex gap-3 justify-between'>
                <p className='font-bold text-gray-500'>{conversation.fullName}</p>
                <span className='text-xl'>{emoji}</span>
            </div>
        </div>
      </div>
      {!lastIdx && <div className='divider my-0 py-0 h-1'></div>}
    </>
  )
}

export default Conversation

// import userpic from './up.jpg';

// const Conversation = () => {
//   return (
//     < >
//       <div className="flex gap-2 items-center hover:bg-green-500 rounded p-2 py-1 cursor-pinter ">
//         <div className="avatar online">
//             <div className="w-12 rounded-full">
//                 <img src={userpic} alt="profilepic"/>
//             </div>
//         </div>
//         <div className='flex flex-col flex-1'>
//             <div className='flex gap-3 justify-between'>
//                 <p className='font-bold text-gray-200'>Buddy Doe</p>
//                 <span className='text-xl'>😆</span>
//             </div>
//         </div>
//       </div>
//       <div className='divider my-0 py-0 h-1'></div>
//     </>
//   )
// }

// export default Conversation

