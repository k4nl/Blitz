const connection = require('./connection');
const { ObjectId } = require('mongodb');

const createUser = async (name, email, password, role) => {
  const db = await connection();
  const { insertedId } = await db.collection('users').insertOne({ name, email, password, role });
  return insertedId;
};

const findUserByEmail = async (email) => {
  const db = await connection();
  const user = await db.collection('users').findOne({ email });
  return user;
};

module.exports = {
  createUser,
  findUserByEmail,
};