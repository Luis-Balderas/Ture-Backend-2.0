const express = require('express');

const db = require('./db');
db('mongodb+srv://Platzi:Soyunpan123@cluster0.3dagj.mongodb.net/Ture?retryWrites=true&w=majority');


var app = express();

app.use('/', function(req, res) {
    res.send('Hola');
});

app.listen(3000);
console.log('La aplicacion esta escuchando en http://localhost:3000');