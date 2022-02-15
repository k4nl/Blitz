const connection = require('./connection');
const { ObjectId } = require('mongodb');

const createTask = async (task) => {
  const db = await connection();
  await db.collection('tasks').insertOne({ task });
};

const getTaskByName = async (task) => {
  const db = await connection();
  await db.collection('tasks').findOne({ name: task.name });
};

const getAllTasks = async () => {
  const db = await connection();
  await db.collection('tasks').find().toArray();
  // a linha de cima sera alterada para um aggregate no final do projeto, para linkar uma task a um usuario,
  // fazendo que o usuario so veja suas tarefas
};

const getTaskById = async (id) => {
  const db = await connection();
  await db.collection('tasks').findOne({ _id: ObjectId(id) });
};

const updateTask = async (id, description, taskStatus) => {
  const db = await connection();
  await db.collection('tasks').updateOne(
    { _id: ObjectId(id)},
    { $set: { description, taskStatus } },
  );
};

const deleteTask = async (id) => {
  const db = await connection();
  await db.collection('tasks').deleteOne({ _id: ObjectId(id) });
};

module.exports = {
  createTask,
  getTaskByName,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
};