const express = require('express');

const router = express.Router();

const taskControllers = require('../controllers/taskControllers');

router.post('/', userControllers.createTask);
router.get('/', userControllers.getAllTasks);
router.put('/', userControllers.updateTask);
router.delete('/', userControllers.deleteTask);


module.exports = router;