const express = require('express');
const path = require('path');

const routerProdutos = require('./router');

const { connectToDb } = require('./db');
const app = express();

connectToDb();

app.use(express.json());

app.use('/produtos', routerProdutos);

app.use('/', express.static(path.join(__dirname, 'public')));

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})