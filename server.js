const express = require('express');
const app = express();

const port = 8080;
const Container = require('./Desafio2');
const Apple = new Container('Apple');

const server = app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`);
});

server.on("error", error => console.log(`Error en servidor ${error}`));

app.get('/', (req, res) => {
    res.send(`
        <h1> Bienvenido Terricola </h1>
        <a href='/productos'> Ir a productos </a>
        <br>
        <a href='/productoRandom'> Recibir producto random </a>
    `);
});

app.get('/productos', (req, res) => {
    Apple.getAll().then(productos => res.send(productos));
});

app.get('/productoRandom', (req, res) => {
    Apple.randomProduct().then(response => res.send(response));
});
