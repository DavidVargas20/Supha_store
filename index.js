const http = require('http');
const express = require('express');
const app = express();

//Recursos
app.use(express.static(__dirname + '/'));

//enrutamiento
app.get('/' ,(req,res) => {
    res.render('logup.html');

});

app.listen(3000);

console.log('Servidor corriendo en el puerto 3000')