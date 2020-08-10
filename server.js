const express = require('express');
var app = express();
const server = require('http').Server(app);


const bodyParser = require('body-parser');
const socket = require('./socket');
const router = require('./network/routes');
const db = require('./db');
db('mongodb+srv://Platzi:Soyunpan123@cluster0.3dagj.mongodb.net/Ture?retryWrites=true&w=majority');

socket.conncet(server);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

router(app);

app.use('/app', express.static('public'));

app.listen(3000, function() {
    console.log('La aplicacion esta escuchando en http://localhost:3000');
});
