const Student = require('../models/Student');
const Enrollment = require('../models/Enrollment');

exports.createStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body);
    res.status(201).json(student);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    await Student.findByIdAndUpdate(id, { isActive: false });
    await Enrollment.updateMany({ studentId: id }, { isActive: false });
    res.status(200).json({ message: 'Student and enrollments deactivated' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getStudentCourses = async (req, res) => {
  try {
    const enrollments = await Enrollment.find({ studentId: req.params.id, isActive: true }).populate({
      path: 'courseId',
      match: { isActive: true }
    });

    const courses = enrollments.map(e => e.courseId).filter(Boolean);
    res.status(200).json(courses);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
