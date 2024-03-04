import UseGetCoversation from "../../Hooks/useGetCoversation";
import Conversation from "./Conversation";

const Conversations = () => {
	const { loading, conversation } = UseGetCoversation();
	console.log(conversation);

	return (
		<div className='py-2 flex flex-col overflow-auto'>
			

			{conversation.map((data,idx) => 
				
				loading ? <span key={data._id} className="loading loading-spinner mx-auto"></span> :
						<Conversation
							key={data._id}
							data={data}
							lastIdx={idx === data.length - 1} />
				
			)}

		

		</div>
	);
};
export default Conversations;