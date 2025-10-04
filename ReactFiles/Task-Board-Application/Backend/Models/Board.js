const mongoose= require("mongoose");

const BoardSchema= new mongoose.Schema({
    name:{type:String , required:true},
    createdBY:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true},
    members:[
        {
            user:{type:mongoose.Schema.Types.ObjectId,ref:"User"},
            role:{type:String,enum:["admin","member"],default:"member"}

        }
    ],
  createdAt:{type:Date,default:Date.now}
});

module.exports= mongoose.model("Board",BoardSchema);