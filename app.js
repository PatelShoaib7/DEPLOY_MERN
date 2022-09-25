const express = require('express');
const connection = require('./db');
//const connection2 = require("./db2")
const cors = require('cors')
const authRouter = require('./routes/auth.router')
const taskRouter=require("./routes/task.router");


const app =express();
app.use(cors())
app.use(express.json())
app.use("/auth", authRouter)
app.use("/user",taskRouter)

 


if(process.env.NODE_ENV=='production'){
    const path = require('path')

    app.get('/',(req,res)=>{
        app.use(express.static(path.resolve(__dirname,'client/hire','build')))
        res.sendFile(path.resolve(__dirname,'client/hire','build','index.html'))
    })
}  
app.listen(1111,async()=>
{  
    try{
              await connection
              console.log("connected to server sucessfully")
    }catch{
              console.log("oops something went wrong")
    }
            
 
}) 