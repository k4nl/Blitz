const CustomError = require('../../middlewares/CustomError');
const taskSchema = require('../../schemas/taskSchema');
const userSchema = require('../../schemas/userSchema');
const e = require('../dictionary/status');

const verifyName = (name) => {
  if (name) {
    throw new CustomError({ status: e.invalidRequest, message: 'Tasks name is equal to another task'})
  };
};

const verifyIfUserEmailExists = (email) => {
  if (email) {
    throw new CustomError({ status: e.invalidRequest, message: 'User email already exist'})
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

const verifyTaskOwner = (task, userId, userEmail) => {
  if (task !== userId && userEmail !== 'admin@blitz.com') {
    throw new CustomError({ status: e.unauthorized, message: 'Unauthorized' })
  }
};

const verifyUser = ({ user }, password) => {
  if (!user || user.password !== password) {
    throw new CustomError({ status: e.invalidRequest, message: 'User not found or incorrect password' })
  }
}


module.exports = {
  verifyName,
  verifyIfTaskExist,
  verifyIfUserEmailExists,
  verifySchema,
  verifyTaskOwner,
  verifyUser,
}