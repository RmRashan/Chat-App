import Home from "./pages/home/Home"
import Login from "./pages/login/Login"
import { Navigate, Route, Routes } from 'react-router-dom'
import Signup from './pages/signup/Signup';
import { Toaster } from 'react-hot-toast'
import useAuthContexts from "./context/AuthContext";


function App() {

  const { authuser } = useAuthContexts();
  return (
    <div className="p-4 h-screen flex items-center justify-center bg">


      <Routes>

        <Route path="/" element={authuser ? <Home /> : <Navigate to="/login" />} />
        <Route path="/Login" element={authuser ? <Navigate to="/" /> : <Login />} />
        <Route path="/signup" element={authuser ? <Navigate to="/" /> : <Signup />} />
        

      </Routes>
      <Toaster />

    </div>
  )
}

export default App

