const express = require('express');
const connection = require('./db');
//const connection2 = require("./db2")
const cors = require('cors')
const authRouter = require('./routes/auth.router')
const taskRouter=require("./routes/task.router");
const PORT=process.env.PORT || 5000;

const app =express();
app.use(cors())
app.use(express.json())
app.use("/auth", authRouter)
app.use("/user",taskRouter)

 


if(process.env.NODE_ENV=="production"){
    app.use(express.static('client/build'))
    const path = require('path')
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}
 
app.listen(PORT,async()=>
{  
    try{
              await connection
              console.log("connected to server port 5000 sucessfully")
    }catch{
              console.log("oops something went wrong")
    }
            
 
}) 