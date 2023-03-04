const Task = require('../models/task.model');

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    return res.status(201).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const createTask = async (req, res) => {
  try {
    const createTask = await Task.create(req.body);
    return res.status(201).json({ createTask });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const getTask = await Task.findOne({ _id: taskID });
    if (!getTask) {
      return res.status(404).json({ msg: 'no task with id ' + taskID });
    }
    res.json({ getTask });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
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
