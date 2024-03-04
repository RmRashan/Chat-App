/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";
import { toast } from 'react-hot-toast';

const UseGetMessage = () => {
    const [loading, setLoading] = useState()
    const { messages, setMessages, selectedCoversation } = useConversation()

    useEffect(() => {

        const getMessage = async (message) => {
            setLoading(true)

            try {

                const res = await fetch(`/api/message/${selectedCoversation._id}`)
                const data = await res.json()
                if (data.error) throw new Error(data.error)



                setMessages(data)

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
