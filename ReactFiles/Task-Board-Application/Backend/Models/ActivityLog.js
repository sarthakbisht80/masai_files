const mongoose= require("mongoose");

const activityLogSchema= new mongoose.Schema({
    boardId:{type:mongoose.Schema.Types.ObjectId,ref:"Board",required:true},
    action:{type:String, required:true},
    user:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true},
    desc:{type:String},
    createdAt:{type:Date,default:Date.now}

});
module.exports= mongoose.Schema("activityLog",activityLogSchema);
