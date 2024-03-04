/* eslint-disable no-unused-vars */
/* eslint-disable no-empty */
import { useEffect, useState } from "react";
import toast from "react-hot-toast";



const UseGetCoversation = () => {
    const [loading, setLoding] = useState(false);
    const [conversation, setConversation] = useState([]);


    useEffect(() => {
        const getCoversation = async () => {
            setLoding(true)

            try {

                const res = await fetch("/api/users");
                const data = await res.json();

                if (data.error) throw new Error(data.error)
                setConversation(data)

            } catch (error) {
                toast.error(error.message)
            } finally {
                setLoding(false)


            }
        }


        getCoversation();


    }, [])


    return { loading, conversation }
}

export default UseGetCoversation;
