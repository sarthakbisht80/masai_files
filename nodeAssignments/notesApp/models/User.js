const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  role:{enum:["admin","user"]},
  password: String, // ✅ Store hashed password
});

module.exports = mongoose.model("User", userSchema);
