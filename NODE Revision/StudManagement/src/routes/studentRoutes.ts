const express = require("express");
const { createStudent, getStudents, getStudentById } = require("../controllers/studentController");

const router = express.Router();

router.post("/students", createStudent);
router.get("/students", getStudents);
router.get("/students/:id", getStudentById);

module.exports = router;
