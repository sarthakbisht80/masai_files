const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: {
   type:mongoose.Schema.Types.ObjectId,
   ref:'Author',
   required:true
   },
  year: Number,
  birthyear: Number,
  nationality: String,
});
//book model with books as acllection  name..
const bookModel= mongoose.model("books",bookSchema);
module.exports=bookModel;