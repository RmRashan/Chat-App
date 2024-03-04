import { useState } from "react";

import toast from "react-hot-toast";
import useAuthContexts from "../context/AuthContext";


const UseLogout = () => {


    const [loading, setLoading] = useState(false)
    const { setAuthUser } = useAuthContexts()
    
    const logout = async () => {
        

        setLoading(true);
        try {
            console.log("1")

            const res = await fetch("/api/auth/logout", {
                method: "POST",
                headers: { "Content-Type": "Application/json" },
               
            })
            const data = await res.json()

            if (data.error) throw new Error(data.error)


            //localStorage
            localStorage.removeItem("chat-user")
            //context
            setAuthUser(null)


        } catch (error) {

            toast.error(error.message)
            console.log(error)

        } finally {
            setLoading(false);

        }

    }

return {loading , logout}
}

export default UseLogout;
