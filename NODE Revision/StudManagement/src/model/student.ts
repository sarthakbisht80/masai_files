const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    minlength: [3, "Name must be at least 3 characters long"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"],
  },
  age: {
    type: Number,
    required: [true, "Age is required"],
    min: [5, "Age must be at least 5"],
  },
  course: {
    type: String,
    required: true,
    enum: ["Web Development", "Data Science", "UI/UX"],
  },
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
