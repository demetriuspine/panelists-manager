const express = require('express');
const bodyParser = require('body-parser');
const getAllPanelists = require('./middlewares/getAllPanelists');
const getPanelistById = require('./middlewares/getPanelistById');
const login = require('./middlewares/login');
const tokenValidation = require('./middlewares/panelistValidations/tokenValidation');
const nameValidation = require('./middlewares/panelistValidations/nameValidation');
const ageValidation = require('./middlewares/panelistValidations/ageValidation');
const panelistValidation = require('./middlewares/panelistValidations/panelistValidation');
const watchedAtValidation = require('./middlewares/panelistValidations/watchedAtValidation');
const rateValidation = require('./middlewares/panelistValidations/rateValidation');
const panelistCreation = require('./middlewares/panelistCreation');

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

app.post('/login', login);

app.post('/talker',
  tokenValidation,
  nameValidation,
  ageValidation,
  panelistValidation,
  watchedAtValidation,
  rateValidation,
  panelistCreation);

app.listen(PORT, () => {
  console.log('Online');
});
