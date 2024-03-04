/* eslint-disable no-unused-vars */
import { useState } from "react";
import toast from "react-hot-toast";
import useAuthContexts from "../context/AuthContext";


const UserSignup = () => {
    const [loading, setLoading] = useState(false)
    const { authuser, setAuthUser } = useAuthContexts()

    const signup = async ({ fullname, username, password, confirmpassword, gender }) => {
        
        const success = handleInputErrors({ fullname, username, password, confirmpassword, gender })
        if (!success) return;

        setLoading(true);
        try {

            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: {"Content-Type":"Application/json"},
                body: JSON.stringify({ fullname, username, password, confirmpassword, gender })
            })
            const data = await res.json()
            if (data.error) throw new Error(data.error)
            

            //localStorage
            localStorage.setItem("chat-user" , JSON.stringify(data))
            //context
            setAuthUser(data)

            
        } catch (error) {

            toast.error(error.message)
            
        } finally {
            setLoading(false);

        }

    }

    return {loading , signup}
}

export default UserSignup;


function handleInputErrors({ fullname, username, password, confirmpassword, gender }) {
    
  
    if (!fullname || !username || !password || !confirmpassword || !gender) {
        toast.error("please fill in all fields")
        return false

    }

    if ( password !== confirmpassword ) {
        toast.error("password do not matchh")
        return false
    }

    return true

}