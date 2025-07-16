const mongoose= require("mongoose");
const bookSchema = new mongoose.Schema({
    title:{type:String, required:true ,unique:true},
    price:{type:Number, required:true ,min:0},
    pages:{type:Number ,required:true,min :1 },
    genre:String,
    author:{type:mongoose.Schema.Types.ObjectId, ref:"Author",required:true},
    isDeleted:{type:Boolean, default:false},

});
module.exports= mongoose.model("Book",bookSchema);