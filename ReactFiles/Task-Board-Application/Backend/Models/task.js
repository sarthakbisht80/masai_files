const mongoose= require("mongoose");

const taskSchema= new mongoose.Schema({
    boardId:{type:mongoose.Schema.Types.ObjectId,ref:"Board",required:true},
    columnId:{type:mongoose.Schema.Types.ObjectId,ref:"Column",required:true},
    action:{type:String, required:true},
    user:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true},
    desc:{type:String},
     createdBY:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true},
    title:{type:String,required:true},
    order:{type:String,required:true, default:0} ,   
    createdAt:{type:Date,default:Date.now}

});
module.exports= mongoose.Schema("Task",taskSchema);
