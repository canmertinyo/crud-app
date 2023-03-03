const express = require('express');
const router = express.Router();
const {
  getAllTasks,
  createTask,
  deleteTask,
  getTask,
  updateTask,
} = require('../controllers/tasks');

router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
