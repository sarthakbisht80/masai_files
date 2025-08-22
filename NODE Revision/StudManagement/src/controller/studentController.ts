const Student = require("../models/Student");

const createStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json({
      message: "Student created successfully",
      student,
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }
    res.json(student);
  } catch (error) {
    res.status(400).json({ error: "Invalid student ID" });
  }
};

module.exports = { createStudent, getStudents, getStudentById };
