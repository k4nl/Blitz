const CustomError = require('../../middlewares/CustomError');
const taskSchema = require('../../schemas/taskSchema');
const userSchema = require('../../schemas/userSchema');
const e = require('../dictionary/status');

const verifyName = (name) => {
  if (name) {
    throw new CustomError({ status: e.invalidRequest, message: 'Tasks name is equal to another task'})
  };
};

const verifyIfTaskExist = (task) => {
  if (!task) {
    throw new CustomError({ status: e.notFound, message: 'Task not found'})
  };
};

const verifySchema = (error, msg) => {
  if (error) {
    throw new CustomError({ status: e.invalidRequest, message: msg })
  }
}

const verifyTaskOwner = (task, user) => {
  if (task !== user) {
    throw new CustomError({ status: e.unauthorized, message: 'Unauthorized' })
  }
}


module.exports = {
  verifyName,
  verifyIfTaskExist,
  verifySchema,
  verifyTaskOwner,
}