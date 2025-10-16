const mongoose= require("mongoose");


const EnrollSchema= mongoose.Schema({
    user:{type:mongoose.Schema.Types.ObjectId,ref:
    "User",required:true },
   course:{type:mongoose.Schema.Types.ObjectId,ref:
    "Course",required:true },
    enrollAt:{type:Date,default:Date.now}
     
})
EnrollSchema.index({user:1,course :1},{unique:true});

module.exports= mongoose.model("Course",EnrollSchema);
