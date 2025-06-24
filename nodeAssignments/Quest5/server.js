const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json());

const PORT = 3008;


const readDB = () => {
  const data = fs.readFileSync('db.json', 'utf-8');
  return JSON.parse(data);
};

const writeDB = (data) => {
  fs.writeFileSync('db.json', JSON.stringify(data, null, 2));
};

// POST
app.post('/students', (req, res) => {
  const students = readDB();
  const newStudent = req.body;
  if (!newStudent.id || !newStudent.name || !newStudent.course || !newStudent.batch) {
    return res.status(400).json({ message: "Invalid student data" });
  }
  students.push(newStudent);
  writeDB(students);
  res.status(201).json(newStudent);
});

// GET /students → Fetch all students
app.get('/students', (req, res) => {
  const students = readDB();
  if (students.length === 0) {
    return res.status(404).json({ message: "No students found" });
  }
  res.json(students);
});

// GET 
app.get('/students/:id', (req, res) => {
  const students = readDB();
  const student = students.find(s => s.id == req.params.id);
  if (!student) {
    return res.status(404).json({ message: "No students found" });
  }
  res.json(student);
});

// PUT /students/:id → Update student record
app.put('/students/:id', (req, res) => {
  const students = readDB();
  const index = students.findIndex(s => s.id == req.params.id);
  if (index === -1) {
    return res.status(404).json({ message: "No students found" });
  }
  students[index] = { ...students[index], ...req.body };
  writeDB(students);
  res.json(students[index]);
});

// DELETE /students/:id → Delete student record
app.delete('/students/:id', (req, res) => {
  let students = readDB();
  const initialLength = students.length;
  students = students.filter(s => s.id != req.params.id);
  if (students.length === initialLength) {
    return res.status(404).json({ message: "No students found" });
  }
  writeDB(students);
  res.json({ message: "Student deleted successfully" });
});

// GET /students/search?course=<course> → Filter by course
app.get('/students/search', (req, res) => {
  const course = req.query.course;
  const students = readDB();
  const filtered = students.filter(s => s.course.toLowerCase() === course.toLowerCase());
  if (filtered.length === 0) {
    return res.status(404).json({ message: "No students found" });
  }
  res.json(filtered);
});

app.use((req, res) => {
  res.status(404).json({ message: "404 Not Found" });
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
