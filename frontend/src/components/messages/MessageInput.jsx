/* eslint-disable no-unused-vars */
import { BsSend } from "react-icons/bs";
import UseSendMessage from "../../Hooks/useSendMessage";
import { useState } from "react";

const MessageInput = () => {

	const { loading, sendMessage } = UseSendMessage();

	const [msg, setMsg] = useState("")

	const handleSubmit = (e) => {

		e.preventDefault();

		if (msg) {

			sendMessage(msg)
			setMsg("")
		}

	}
	return (
		<form className='px-4 my-3' onSubmit={handleSubmit}>
			<div className='w-full relative'>
				<input
					value={msg}
					onChange={(e) => setMsg(e.target.value)}
					type='text'
					className='border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white'
					placeholder='Send a message'
				/>
				<button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
					<BsSend />
				</button>
			</div>
		</form>
	);
};
export default MessageInput;