const connection = require('./connection');
const { ObjectId } = require('mongodb');

const createTask = async (task, user) => {
  const db = await connection();
  return db.collection('tasks').insertOne({ task, user });
};

const getTaskByName = async (name) => {
  const db = await connection();
  return db.collection('tasks').findOne({ 'task.name': name });
};

const getAllTasks = async () => {
  const db = await connection();
  return db.collection('tasks').find({}).toArray();
};

const getAllTasksByUser = async (id) => {
  const db = await connection();
  return db.collection('tasks').find({ 'user.id': id }).toArray();
}

const getTaskById = async (id) => {
  const db = await connection();
  return db.collection('tasks').findOne({ _id: ObjectId(id) });
};

const updateTask = async (id, task) => {
  const db = await connection();
  await db.collection('tasks').updateOne(
    { _id: ObjectId(id)},
    { $set: { 'task.status': task.status } },
  );
  return task;
};

const deleteTask = async (id) => {
  const db = await connection();
  return db.collection('tasks').deleteOne({ _id: ObjectId(id) });
};

module.exports = {
  createTask,
  getTaskByName,
  getAllTasks,
  getAllTasksByUser,
  getTaskById,
  updateTask,
  deleteTask,
};