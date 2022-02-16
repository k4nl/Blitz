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

// tratativa do erro

app.use((error, _req, resp) => {
  if (error.status) {
    return resp.status(error.status).json(error);
  }
  console.log(error);
  return resp.status(e.serverError).json(error);
});

app.listen(PORT, () => console.log(`Online na porta ${PORT}!`));