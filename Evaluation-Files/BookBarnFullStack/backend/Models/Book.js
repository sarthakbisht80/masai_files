const mongoose= require("mongoose");
const bookSchema = new mongoose.Schema({
    title:{type:String, required:true ,unique:true},
    author:{type:mongoose.Schema.Types.ObjectId, ref:"Author",required:true},
    price:{type:Number, required:true ,min:0},
    description:{type:String},
    genre: {type:String},
    
    createdAt:{type:Date ,default:Date.now()}

});
module.exports= mongoose.model("Book",bookSchema);