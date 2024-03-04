import { useState } from "react";
import useConversation from "../zustand/useConversation";
import { toast } from 'react-hot-toast';

const UseSendMessage = () => {
    const [loading, setLoading] = useState()
    const { messages, setMessages, selectedCoversation } = useConversation()

    const sendMessage = async (message) => {
        setLoading(true)

        try {

            const res = await fetch(`/api/message/send/${selectedCoversation._id}`, {
                method: "POST",
                headers: { "Content-Type": "Application/json" },
                body: JSON.stringify({ message })
            })
            const data = await res.json()
            if (data.error) throw new Error(data.error)



            setMessages([...messages, data])

        } catch (error) {

            toast.error(error.message)
        } finally {
            setLoading(false)
        }

    }

    return { loading, sendMessage }

}

export default UseSendMessage;
