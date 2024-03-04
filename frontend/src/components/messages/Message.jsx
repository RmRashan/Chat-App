/* eslint-disable react/prop-types */

import useConversation from "../../zustand/useConversation";
import useAuthContexts from '../../context/AuthContext'
import moment from 'moment';
const Message = ({ message }) => {

    const { selectedCoversation } = useConversation();
    const { authuser } = useAuthContexts();

    const fromMe = message.senderId === authuser._id;

    const chatclasname = fromMe ? 'chat-end ' : 'chat-start ';
    const bg = fromMe ? ' bg-blue-500' : ' ';
    const profilePic = fromMe ? authuser.profilePic : selectedCoversation?.profilePic;



    // In your Next.js component or API route:
    const formattedDate = moment(message.createdAt).format(' HH:mm:ss'); 
    // OR


    return (
        <div className={`chat ${chatclasname}`}>
            <div className='chat-image avatar'>
                <div className='w-10 rounded-full'>
                    <img alt='Tailwind CSS chat bubble component' src={profilePic} />
                </div>
            </div>
            <div className={`chat-bubble text-white ${bg} shake pb-2`}>{message.message}</div>
            <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>{formattedDate}</div>
        </div>
    );
};
export default Message;