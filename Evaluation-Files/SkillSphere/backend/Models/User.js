const mongoose= require("mongoose");
const bcrypt= require("bcrypt");

const userSchema= mongoose.Schema({
    name:{type:String,required:true,trim:true},
    email:{type:String, required:true, unique:true,trim:true},
    password:{type:String,required:true},
    role:{type:String , enum:['student',"admin"],default:'student'}
})

module.exports= mongoose.model("User",userSchema);
