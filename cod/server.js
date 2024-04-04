const express = require('express');
const cors = require('cors');
const path = require('path');

const routerProdutos = require('./router');

const { connectToDb } = require('./db');
const app = express();

connectToDb();

/**
 * Middleware => Express é capaz de analisar corpos de solicitação com formato JSON. 
 * Ele transforma automaticamente os dados JSON recebidos em objetos JavaScript, 
 * tornando mais fácil e conveniente trabalhar com esses dados dentro das rotas.
 */
app.use(express.json());

/**
 * Middlware => Permite que seu servidor Express responda a solicitações de diferentes origens, 
 * o que é útil em casos como APIs públicas ou aplicações web que precisam acessar recursos de outro domínio.
 */
app.use(cors());

app.use('/produtos', routerProdutos);

app.use('/', express.static(path.join(__dirname, 'public')));

// Middleware => STATUS 404
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
})

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})