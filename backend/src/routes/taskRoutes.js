const express = require('express');

const router = express.Router();

const taskControllers = require('../controllers/taskControllers');
const middleware = require('../middlewares/auth')

router.post('/', middleware.login ,taskControllers.createTask);
router.get('/', middleware.login, taskControllers.getAllTasks);
router.put('/', middleware.login, taskControllers.updateTask);
router.delete('/', middleware.login, taskControllers.deleteTask);


module.exports = router;