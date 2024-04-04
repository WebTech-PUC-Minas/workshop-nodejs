const express = require('express');
const routerProdutos = express.Router();
const Produtos = require('./produtos');


routerProdutos.get('/', async (req, res) => {
    const produtos = await Produtos.findAll();

    res.status(200).json(produtos);
})

routerProdutos.get('/:id', async (req, res) => {

    const { id } = req.params;

    const produto = await Produtos.findByPk(id);
    res.status(200).json(produto);
})

routerProdutos.post('/', async (req, res) => {
    const { descricao, valor, marca } = req.body;
    
    const novoProduto = await Produtos.create({
        descricao,
        valor,
        marca
    })

    res.status(200).json(novoProduto);
})

routerProdutos.put('/:id', async (req, res) => {

    const { descricao, valor, marca } = req.body;
    const { id } = req.params;

    if (!descricao || !valor || !marca) {
        res.status(400).json({
            error: "Campos obrigatórios não preenchidos"
        })
    }

    try {

        const [rowsUpdate] = await Produtos.update({
            descricao,
            valor,
            marca
        }, {
            where: { id }
        })

        if (rowsUpdate == 0) {
            res.status(400).json({
                error: "Produto não encontrado"
            })
        }
        
        const atualizadoProduto = await Produtos.findByPk(id);
        
        res.status(200).json(atualizadoProduto);
    } catch (error) {
        console.error(error);
    }

})


routerProdutos.delete('/:id', async (req, res) => {

    const { id } = req.params;

    Produtos.destroy({
        where: { id }
    }).then( _ => {
        res.status(200).json( { message: 'Produto deletado com sucesso.' } )
    })

})


module.exports = routerProdutos;