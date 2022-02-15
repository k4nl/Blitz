const taskModels = require('../models/taskModels');
const CustomError = require('../middlewares/CustomError');
const e = require('../utils/dictionary/status');
const verify = require('../utils/functions');
const schema = require('../schemas/taskSchema');

const createTask = (task) => {
  const { error } = schema.taskSchema.validade({ task });
  const msg = error && error.details[0].message;
  if (error) {
    throw new CustomError({ status: e.invalidRequest, message: msg});
  }
  const name = await taskModels.getTaskByName(task);
  verify.verifyName(name);

  const task = await taskModels.createTask(task);
  return task;
}

module.exports = {
  createTask,
}