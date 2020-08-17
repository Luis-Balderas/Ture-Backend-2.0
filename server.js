require('dotenv').config();
require('./configure/db');

const express = require('express');
var app = express();
const server = require('http').Server(app);

const cors = require('cors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const bodyParser = require('body-parser');
const socket = require('./socket');
const router = require('./network/routes');

socket.conncet(server);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

router(app);

app.use('/app', express.static('public'));

app.use(cors);

app.listen(3000, function () {
  console.log('La aplicacion esta escuchando en http://localhost:3000');
});
