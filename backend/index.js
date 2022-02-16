const express = require('express');
const bodyParser = require('body-parser');
const e = require('./src/utils/dictionary/status');
const userRoutes = require('./src/routes/userRoutes');
const taskRoutes = require('./src/routes/taskRoutes');
require('dotenv').config();
const app = express();

app.use(bodyParser.json());

app.use('/task', taskRoutes);
app.use('/', userRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Online na porta ${PORT}!`));