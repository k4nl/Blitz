const connection = require('./connection');
const { ObjectId } = require('mongodb');

const createTask = async (user, task) => {
  const db = await connection();
  const task = await db.collection('tasks').insertOne({ user, task });
  return task;
};

const getAllTasks = async (user) => {
  const db = await connection();
  const tasks = await db.collection('tasks').aggregate({ $match: { _id: ObjectId(user.id)}});
  return tasks;
};

const getTaskById = async (id) => {
  const db = await connection();
  const task = await db.collection('tasks').findOne({ _id: ObjectId(id) });
  return task;
};

const updateTask = async (id, description, taskStatus) => {
  const db = await connection();
  const task = await db.collection('tasks').updateOne(
    { _id: ObjectId(id)},
    { $set: { description, taskStatus } },
  );
  return task;
};

const deleteTask = async (id) => {
  const db = await connection();
  const deleted = await db.collection('tasks').deleteOne({ _id: ObjectId(id) });
  return deleted;
};

module.exports = {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
};