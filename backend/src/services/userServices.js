const { ObjectId } = require('mongodb');
const userModels = require('../models/userModels');
const CustomError = require('../middlewares/CustomError');
const e = require('../utils/dictionary/status');
const schema = require('../schemas/userSchema');
const auth = require('../middlewares/auth');


const createUser = async (name, email, password) => {
  const { error } = schema.userSchema.validate({ name, email, password });
  const msg = error && error.details[0].message;
  if (error) {
    throw new CustomError({ status: e.invalidRequest, message: msg});
  }
  
  const emailAlreadyTaken = await userModels.findUserByEmail(email);
  if (emailAlreadyTaken) {
    throw new CustomError({ status: e.alreadyRegistered, message: msg });
  }

  const insertedId = await userModels.createUser(name, email, password);
  return { user: { name, email, _id: ObjectId(insertedId) } };
};

const login = async (email, password) => {
  const { error } = schema.loginSchema.validate({ email, password });
  const msg = error && error.details[0].message;
  if (error) {
    throw new CustomError({ status: e.invalidFilds, message: msg });
  }

  const user = await userModels.findUserByEmail(email);

  if (!user || user.password !== password) {
    throw new CustomError({ status: e.incorrectUser, message: msg});
  }

  const { _id } = user;

  return { token: auth.createToken(_id, email) };
};

module.exports = {
  createUser,
  login,
};