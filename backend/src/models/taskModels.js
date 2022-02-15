const connection = require('./connection');
const { ObjectId } = require('mongodb');

const createTask = async (task, user) => {
  const db = await connection();
  return db.collection('tasks').insertOne({ task, user });
};

const getTaskByName = async ({ name }) => {
  const db = await connection();
  return db.collection('tasks').findOne({ 'task.name': name });
};

const getAllTasks = async () => {
  const db = await connection();
  return db.collection('tasks').find({}).toArray();
  // a linha de cima sera alterada para um aggregate no final do projeto, para linkar uma task a um usuario,
  // fazendo que o usuario so veja suas tarefas
};

const getAllTasksByUser = async (id) => {
  const db = await connection();
  return db.collection('tasks').find({ 'user.id': id }).toArray();
}

const getTaskById = async (id) => {
  const db = await connection();
  return db.collection('tasks').findOne({ _id: ObjectId(id) });
};

const updateTask = async (id, taskStatus) => {
  const db = await connection();
  return db.collection('tasks').updateOne(
    { _id: ObjectId(id)},
    { $set: { 'task.status': taskStatus } },
  );
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