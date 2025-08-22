const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  status: { type: String, enum: ['pending', 'completed'], default: 'pending' },
  order: { type: Number, default: 0 },
});

module.exports = mongoose.model('Task', taskSchema);
