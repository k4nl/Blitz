const taskModels = require('../models/taskModels');
const CustomError = require('../middlewares/CustomError');
const e = require('../utils/dictionary/status');
const verify = require('../utils/functions');
const schema = require('../schemas/taskSchema');

const createTask = async (task, userId) => {
  const { error } = schema.taskSchema.validate(task);
  const msg = error && error.details[0].message;
  verify.verifySchema(error, msg);

  const name = await taskModels.getTaskByName(task);
  verify.verifyName(name);

  await taskModels.createTask(task, { id: userId });
  return task;
}

const getAllTasks = async () => taskModels.getAllTasks();

const updateTask = async (task, userId, id) => {
  const { error } = schema.editSchema.validate(task);
  const msg = error && error.details[0].message;
  verify.verifySchema(error, msg);

  const taskFound = await taskModels.getTaskById(id);
  console.log(taskFound);
  verify.verifyIfTaskExist(taskFound);
  verify.verifyTaskOwner(taskFound.user.id, userId);
  const updated = await taskModels.updateTask(id, task.status);

  const response = { 
    _id: id,
    task: { ...taskFound.task, status: task },
    user: { ...taskFound.user },
  };

  return response;
}

module.exports = {
  createTask,
  getAllTasks,
  updateTask,
}