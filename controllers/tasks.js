const Task = require('../models/task.model');

const getAllTasks = (req, res) => {
  res.send('all items from the file x.d');
};

const createTask = async (req, res) => {
  const task = await Task.create(req.body);
  return res.status(201).json({ task });
};

const getTask = (req, res) => {
  res.json({ id: req.params.id });
};

const updateTask = (req, res) => {
  res.send('update task');
};

const deleteTask = (req, res) => {
  res.send('delete task');
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
