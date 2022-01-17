const express = require('express');
const bodyParser = require('body-parser');
const getAllPanelists = require('./middlewares/getAllPanelists');
const getPanelistById = require('./middlewares/getPanelistById');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', getAllPanelists);

app.get('/talker/:id', getPanelistById);

app.listen(PORT, () => {
  console.log('Online');
});
