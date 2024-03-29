/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";
import { toast } from 'react-hot-toast';
import useAuthContexts from "../context/AuthContext";

const UseGetMessage = () => {
    const [loading, setLoading] = useState()
    const { messages, setMessages, selectedCoversation } = useConversation()
    const { setAuthUser } = useAuthContexts();
    useEffect(() => {

        const getMessage = async (message) => {
            setLoading(true)

            try {

                const res = await fetch(`/api/message/${selectedCoversation._id}`)
                const data = await res.json()
              

                if (data.error == "unauthorized - Ivaild Provided" || data.error == "unauthorized - No Token Provided") {
                    new Error(data.error)
                    return setAuthUser(null);
                } else {
                    setMessages(data)

                }
                

            } catch (error) {

                toast.error(error.message)
            } finally {
                setLoading(false)
            }

        }

        if (selectedCoversation._id) getMessage();


    }, [selectedCoversation._id, setMessages])




    return { loading, messages }

}

export default UseGetMessage;
