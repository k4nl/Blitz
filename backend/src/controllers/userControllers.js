const userServices = require('../services/userServices');
const e = require('../utils/dictionary/status');

const createUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const user = await userServices.createUser(name, email, password);
    return res.status(e.created).json(user);
  } catch (error) {
    return next(error);
  }
};

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const token = await userServices.login(email, password);
    return res.status(e.success).json(token);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  createUser,
  login,
};