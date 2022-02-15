const express = require('express');

const router = express.Router();

const taskControllers = require('../controllers/taskControllers');

router.post('/', taskControllers.createTask);
router.get('/', taskControllers.getAllTasks);
router.put('/', taskControllers.updateTask);
router.delete('/', taskControllers.deleteTask);


module.exports = router;