import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"
export const SignUp_Page = () => {
    const [user , setUser]= useState({})
    const [msg , setMsg]=useState({});
    const navigate=useNavigate()
 const payload ={
  name:'ss',
  email:'ss',
  password:'ss',
  username:'pp'
 }
 const handleChange =(e)=>{
  const {name , value}= e.target;

  setUser({...user, [name]:value})
 }
//  const handleSubmit=()=>{
//   console.log(user)
//  }
  // const getData = async ()=>{
  //   fetch(" http://localhost:1111/auth/signup")
  //   .then((res)=> res.json())
  //   .then((data)=>{
  //     console.log(data)
  //   })
  // }

  const handleSubmit = async (e)=>{
     e.preventDefault()
        fetch(" http://localhost:1111/auth/signup",{
            headers:{"Content-Type":"application/json"},
            method:'POST',
            body:JSON.stringify(user)
        }
        )
        .then((res)=> res.json())
        .then((data)=>{
            if(data.token){
                alert("Account Creted")
                
                navigate("/login")
            } 
        })
  }
  return (
    <div>SignUp_Page
         <h1>MERN</h1>
                <div>
                <form onSubmit={handleSubmit}>
                <input placeholder="Enter name" name="name" onChange={handleChange} />
                <input placeholder="Enter username" name="username" onChange={handleChange} /> 
                <input placeholder="Enter email" name="email" onChange={handleChange} />
                <input placeholder="Enter password"  name="password" onChange={handleChange} />
                <input type="submit" />
                </form>
                </div>
              
    </div>
  )
}
