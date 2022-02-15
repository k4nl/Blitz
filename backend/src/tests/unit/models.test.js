const sinon = require('sinon');
const { expect } = require('chai');
const { MongoClient } = require('mongodb');

const getConnection = require('./mongoConnection');

const taskModels = require('../../models/taskModels');
const userModels = require('../../models/userModels');
const connection = require('./mongoConnection');

const taskExample = {
  _id: '620be4cc7e5f1f65c7c3d7bc',
  task: {
    name: 'problema 3',
    description: 'estou cansado',
    status: 'fodase2'
  },
  user: {
    id: '620be49d7e5f1f65c7c3d7bb',
    email: 'gustav1o@blitz.com'
  }
};

const taskExample2 = {
  _id: '620c0558f51b248c32126571',
  task: {
    name: 'problema 42',
    description: 'estou cansado',
    status: 'em andamento'
  },
  user: {
    id: '620bd17759a0f4411e8e8e00',
    email: 'admin@blitz.com'
  }
};

const userExample = {
	name: 'Gustavo1',
	email: 'gustav1o@blitz.com',
	password: '123456'
};

const userAdmin = {
  name: 'admin',
  email: 'admin@blitz.com',
  password: '123456',
};

const newUser = {
  name: 'Gustavo Braga',
  email: 'gustavo@blitz.com',
  password: '123456',
}

describe('Testando o userModel', () => {
  let connectionMock;
  
  beforeEach(async () => {
    connectionMock = await connection();
    sinon.stub(MongoClient, 'connect').resolves(connectionMock);
    await connectionMock.db('Blitz').collection('users').insertMany([
      {'user': { 'name': 'admin', 'email': 'admin@blitz.com', 'password': '123456' } },
      {'user': { 'name': 'trybe', 'email': 'trybe@blitz.com', 'password': 'trybe123' } },
    ])
  });

  afterEach(async () => {
    await connectionMock.db('Blitz').collection('users').drop();
    await MongoClient.connect.restore();
  });

  describe('Testando o userModels.create', () => {
    it('Se e possivel criar um um usuario', async () => {
      const { ops } = await userModels.createUser(userAdmin);
      const user = ops[0].user;
      expect(user).to.not.be.null;
      expect(user).to.deep.equal(userAdmin);
    });
  });

  describe('Testando o userModels.findUserByEmail', () => {
    it('Se e possivel criar achar um usuario com email', async () => {
      const userData = await userModels.findUserByEmail(userAdmin.email);
      const { user } = userData;
      expect(userData).to.not.be.null;
      expect(user).to.deep.equal(userAdmin);
    });

    it('Se o email nao estiver registrado', async () => {
      const userData = await userModels.findUserByEmail(userExample.email);
      expect(userData).to.be.null;
    });
  });

});
/*
describe('Testando o taskModel', () => {
  let connectionMock;
  
  beforeEach(async () => {
    connectionMock = await connection();
    sinon.stub(MongoClient, 'connect').resolves(connectionMock);
    await connection.db('Blitz').collection('users').insertOne({ })
    await connectionMock.db('Blitz').collection('tasks').insertOne(
      {'task': { 'name': 'projeto blitz', 'description': 'fazer', 'status': 'em andamento' } }
    )
  });

  afterEach(async () => {
    await connectionMock.db('Blitz').collection('tasks').drop();
    await MongoClient.connect.restore();
  });

  describe('Testando o taskModel.createTask', () => {
    it('Se e possivel criar uma task', async () => {
      const task = await taskModels.createTask(taskExample.task);
      console.log(task);
    });
  });

});
*/