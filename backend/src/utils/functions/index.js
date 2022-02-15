const CustomError = require('../../middlewares/CustomError');
const e = require('../dictionary/status');

const verifyName = (name) => {
  if (name) {
    throw new CustomError({ status: e.invalidRequest, message: 'Tasks name is equal to another task'})
  };
};

module.exports = {
  verifyName,
}