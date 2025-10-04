const mongoose= require("mongoose");

const ColumnSchema= new mongoose.Schema({
 boardId:{type:mongoose.Schema.Types.ObjectId,ref:"Board",required:true
 },
name:{type:String, required:true},
order:{type:String,required:true, default:0}    
});

module.exports= mongoose.model("Column",ColumnSchema);