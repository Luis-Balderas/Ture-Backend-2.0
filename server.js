require('dotenv').config();
require('./configure/db');
const cors = require('cors');

const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
const logger = require('morgan');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', function (req, res) {
  res.send('Hola');
});

app.listen(3000);
console.log('La aplicacion esta escuchando en http://localhost:3000');
