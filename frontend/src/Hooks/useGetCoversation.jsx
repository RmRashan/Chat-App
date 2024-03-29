/* eslint-disable no-unused-vars */
/* eslint-disable no-empty */
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import useAuthContexts from "../context/AuthContext";



const UseGetCoversation = () => {
    const [loading, setLoding] = useState(false);
    const [conversation, setConversation] = useState([]);
    const { setAuthUser } = useAuthContexts();

    useEffect(() => {
        const getCoversation = async () => {
            setLoding(true)

            try {

                const res = await fetch("/api/users");
                const data = await res.json();
               
           
                if (data.error == "unauthorized - Ivaild Provided" || data.error == "unauthorized - No Token Provided" ) {
                 new Error(data.error)
                 return setAuthUser(null);
                } else {
                    setConversation(data)
                    
                }

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
