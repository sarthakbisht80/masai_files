const express = require('express');
const router = express.Router();
const { createCourse, deleteCourse, getCourseStudents } = require("../Controllers/courseController");

router.post('/', createCourse);
router.delete('/:id', deleteCourse);
router.get('/:id/students', getCourseStudents);

module.exports = router;
