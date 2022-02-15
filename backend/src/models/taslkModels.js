const connection = require('./connection');
const { ObjectId } = require('mongodb');

const createTask = async (task) => {
  const db = await connection();
  const task = await db.collection('tasks').insertOne({ task });
  return task;
};

const getAllTasks = async () => {
  const db = await connection();
  const tasks = await db.collection('tasks').find().toArray();
  // a linha de cima sera alterada para um aggregate no final do projeto, para linkar uma task a um usuario,
  // fazendo que o usuario so veja suas tarefas
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