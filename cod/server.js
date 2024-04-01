const express = require('express');
const routerProdutos = require('./c-db/router');
const { connectionDb } = require('./c-db/db');
const app = express();

connectionDb();

app.use(express.json());

app.use('/', routerProdutos);

app.get('/', (req, res) => {
    res.send('<h1>Node.js Workshop!</h1>');
})

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is listing ${PORT}`);
})