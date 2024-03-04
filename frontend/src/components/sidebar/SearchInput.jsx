import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import UseGetCoversation from '../../Hooks/useGetCoversation'
import toast from "react-hot-toast";

const SearchInput = () => {
	const [search, setSearch] = useState("");
	const { setSelectedCoversation } = useConversation();
	const { conversation } = UseGetCoversation();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!search) return;
		if (search.length < 1) {
			return toast.error("Search term must be at least 3 characters long");
		}

		const conversation5 = conversation.find((c) => c.fullname.toLowerCase().includes(search.toLowerCase()));
		console.log(conversation5);
		if (conversation5) {
			setSelectedCoversation(conversation5);
			setSearch("");
		} else toast.error("No such user found!");
	};

	return (
		<form onSubmit={handleSubmit} className='flex items-center gap-2'>
			<input
				type='text'
				placeholder='Search…'
				className='input input-bordered rounded-full'
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<button type='submit' className='btn btn-circle bg-sky-500 text-white'>
				<IoSearchSharp className='w-6 h-6 outline-none' />
			</button>
		</form>
	);
};
export default SearchInput;