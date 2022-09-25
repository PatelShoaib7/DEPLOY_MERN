import React from 'react'
import {useNavigate} from "react-router-dom"
export const Home = () => {
    const navigate = useNavigate()
  return (
    <div>Home
         <button onClick={()=>navigate("/login")}>Login</button>
         <button onClick={()=>navigate("/signup")}>SignUp</button>
    </div>
  )
}
