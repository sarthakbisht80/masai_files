const mongoose= require("mongoose");


const CourseSchema= mongoose.Schema({
    title:{type:String,required:true,trim:true},
    description:{type:String, required:true},
    category:{type:String,required:true ,trim:true},
    price:{type:Number,default:0},
    createdBy:{type:mongoose.Schema.Types.ObjectId,ref:"User",required:true}

})

module.exports= mongoose.model("Course",CourseSchema);
