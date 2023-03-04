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

const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const deleteTask = await Task.findOneAndDelete({ _id: taskID });
    if (!deleteTask) {
      return res.status(404).json({ msg: 'no task with id: ' + taskID });
    }
    res.status(200).json({
      info: {
        item: deleteTask,
        message: 'deleted item with no error!',
      },
    });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const updateTask = await Task.findByIdAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updateTask) {
      return res.status(500).json({ msg: 'i cant update' });
    }

    return res.status(200).json({
      info: {
        item: updateTask,
        message: 'item is updated!',
      },
    });
  } catch (error) {}
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
