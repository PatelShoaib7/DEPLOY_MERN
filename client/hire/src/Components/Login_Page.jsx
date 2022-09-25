import React from 'react'
import { useState } from 'react'
import {useNavigate} from "react-router-dom"
export const Login_Page = () => {
    const [user , setUser]= useState({})
    const navigate = useNavigate()

    const handleChange =(e)=>{
        const {name , value}= e.target;
      
        setUser({...user, [name]:value})
       }

    const handleSubmit = async (e)=>{
        e.preventDefault()
           fetch("http://localhost:1111/auth/login",{
               headers:{"Content-Type":"application/json"},
               method:'POST',
               body:JSON.stringify(user)
           }
           )
           .then((res)=> res.json())
           .then((res)=>{
            console.log(res._id)
            localStorage.setItem("userId",JSON.stringify(res._id))
               if(res._id){
                   alert("Logi Sucessful")
                   navigate("/task")
               } 
            console.log(res)
           })
     }
  return (
    <div> <h1>Login_Page</h1>
                
                  <div>
                <form onSubmit={handleSubmit}>
                <input placeholder="Enter username" name="username" onChange={handleChange} /> 
                <input placeholder="Enter password" name="password" onChange={handleChange} />
                <input type="submit" />
                </form>
                </div>
              


    </div>
  )
}
