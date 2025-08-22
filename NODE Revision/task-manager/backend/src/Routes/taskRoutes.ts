const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// GET all tasks
router.get('/', async (req, res) => {
  const tasks = await Task.find().sort({ order: 1 });
  res.json(tasks);
});

// POST add task
router.post('/', async (req, res) => {
  const task = new Task(req.body);
  await task.save();
  res.json(task);
});

// PUT update task (status or order)
router.put('/:id', async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(task);
});

// DELETE task (optional)
router.delete('/:id', async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: 'Task deleted' });
});

module.exports = router;
