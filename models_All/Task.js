const mongoose = require("mongoose")
const taskSchema = mongoose.Schema(
    {
        title:{type:String , require:true},
        status:{type:Boolean  , default:false},
        userId:{type:String }
    })
 
const TaskModel = mongoose.model("tasks" ,taskSchema)
module.exports= TaskModel