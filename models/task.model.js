const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  name: { type: String, required: true },
  completed: { type: Boolean },
});

module.exports = mongoose.model('Task', TaskSchema);
