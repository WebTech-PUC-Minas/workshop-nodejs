// objetivo dessa aplicação é criar um servidor que irá retornar um array de objetos com informações de produtos de um e-commerce

const express = require('express');
const path = require('path');

const routerProdutos = require('./router');

const app = express();

app.use(express.json());

app.use('/produtos', routerProdutos);

app.use('/', express.static(path.join(__dirname, 'public')));

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})