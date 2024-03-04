/* eslint-disable react/prop-types */

import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";

const Conversation = ({ data, lastIdx }) => {
    const { selectedCoversation, setSelectedCoversation } = useConversation();
    const isSelected = selectedCoversation?._id === data._id;

    const { onlineUsers } = useSocketContext();
  const isOnline =  onlineUsers.includes(data._id)
    return (
        <>
            <div onClick={() => setSelectedCoversation(data)}  className={` ${isSelected ? 'bg-sky-500' :'' } flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer`}>
                <div className={`avatar ${isOnline ? 'online':''}`}>
                    <div className='w-12 rounded-full'>
                        <img
                            src={data.profilePic}
                            alt='user avatar'
                        />
                    </div>
                </div>

                <div className='flex flex-col flex-1'>
                    <div className='flex gap-3 justify-between'>
                        <p className='font-bold text-gray-200'>{data.fullname}</p>
                        <span className='text-xl'>🎃</span>
                    </div>
                </div>
            </div>
            {!lastIdx && <div className='divider my-0 py-0 h-1' />}

        </>
    );
};
export default Conversation;