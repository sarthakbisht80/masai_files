const mongoose = require("mongoose");
//schema of author
const authorSchema = new mongoose.Schema({
  name: {type: String, required: true },
  birthyear: Number,
  nationality: String,
});

//author model wiht authors as a collection
const authorModel = mongoose.model("authors", authorSchema);

module.exports={authorModel};