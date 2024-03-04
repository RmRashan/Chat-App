/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";


const AuthContext = createContext();

 const useAuthContexts = () => {
    return useContext(AuthContext);
}

export const AuthContextProvider = ({ children}) => {
    
    const [authuser, setAuthUser] = useState(JSON.parse(localStorage.getItem("chat-user"))  || null  )

    return <AuthContext.Provider value={{ authuser, setAuthUser }}>
        {children}
</AuthContext.Provider>

}

export default useAuthContexts
