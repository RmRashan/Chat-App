/* eslint-disable no-unused-vars */
import { useState } from "react";
import toast from "react-hot-toast";
import useAuthContexts from "../context/AuthContext";



const UserLogin = () => {
    const [loading, setLoading] = useState(false)
    const { authuser, setAuthUser } = useAuthContexts()

    const login = async ({  username, password }) => {
        
        const success = handleInputErrors({  username, password })
        if (!success) return;

        setLoading(true);
        try {

            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: {"Content-Type":"Application/json"},
                body: JSON.stringify({ username, password })
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

    return {loading , login}
}

export default UserLogin;


function handleInputErrors({ username,  password }) {
    
  
    if (!username ||  !password ) {
        toast.error("please fill in all fields")
        return false

    }

    return true

}