import React, { useState } from 'react'
import { useEffect } from 'react'
import {useNavigate} from "react-router-dom"
export const AllTasks = () => {
    const [user , setUser]= useState({})
    const [todo , setTodo]=useState([])
    const navigate = useNavigate()
    var userId = JSON.parse(localStorage.getItem("userId"))
    console.log(userId)
        useEffect(()=>{
            getAllTask();
            if(!userId){
                navigate("/login")
            }
        },[userId])

  
    const handleChange =(e)=>{
        const {name , value}= e.target;
      
        setUser({...user, [name]:value})
       }

    const handleSubmit = async (e)=>{
         e.preventDefault()
           fetch(`http://localhost:1111/user/${userId}/tasks`,{
               headers:{"Content-Type":"application/json"},
               method:'POST',
               body:JSON.stringify(user)
           }
           )
           .then((res)=> res.json())
           .then((res)=>{
            console.log(res)
           localStorage.setItem("userId",JSON.stringify(res._id))
           })
     }

    const getAllTask = async()=>{
        await fetch(`http://localhost:1111/user/${userId}/tasks`)
        .then((res)=>res.json())
        .then((res)=>{
            setTodo(res)
            // console.log(res)
        })
    }
    console.log(todo)
    // useEffect(()=>{
    //     getAllTask()
    // },[todo])
  return (
    <div>
         <h1>AllTasks</h1>
         <div>
                <form onSubmit={handleSubmit}>
                <input placeholder="Add Task" name="title" onChange={handleChange} />
                <input type="submit" />
                </form>
        </div>
    
      <div>
          {
            todo.map((elem)=>(
                <div key={elem._id}>
                   <h4>{elem.title} </h4>
                   <button>{String(elem.status)}</button>
                   </div>
            ))
          }

      </div>
    </div>
  )
}
