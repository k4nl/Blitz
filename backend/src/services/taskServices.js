const taskModels = require('../models/taskModels');
const CustomError = require('../middlewares/CustomError');
const e = require('../utils/dictionary/status');
const verify = require('../utils/functions');
const schema = require('../schemas/taskSchema');

const createTask = async (task, userId) => {
  const { error } = schema.taskSchema.validate(task);
  const msg = error && error.details[0].message;
  if (error) {
    throw new CustomError({ status: e.invalidRequest, message: msg});
  }

  const name = await taskModels.getTaskByName(task);
  verify.verifyName(name);

  await taskModels.createTask(task, { id: userId });
  return task;
}

const getAllTasks = async () => taskModels.getAllTasks();

module.exports = {
  createTask,
  getAllTasks,
}