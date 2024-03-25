import { useEffect } from 'react';
import useConversation from '../Zustandstore/useConversation';
import {useSocketContext} from '../context/SocketContext';
import notificationsound from '../assets/sounds/notification.mp3';

const useListenMessages = () => { 
  const {socket} =useSocketContext();
const {messages, setMessages} =useConversation();

useEffect(() => {
    socket?.on("newMessage", (newMessage) => {
         
        const sound = new Audio(notificationsound);
        sound.play();
        setMessages([...messages, newMessage])
    })

    return () => socket?.off("newMessage");
}, [socket, setMessages,messages ])
}

export default useListenMessages


