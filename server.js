require('dotenv').config();
require('./configure/db');

const express = require('express');
var app = express();
const path = require('path');
const server = require('http').Server(app);

const cors = require('cors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const bodyParser = require('body-parser');
const socket = require('./socket');
const router = require('./network/routes');

socket.conncet(server);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());

router(app);

app.listen(3000, function () {
  console.log('La aplicacion esta escuchando en http://localhost:3000');
});
