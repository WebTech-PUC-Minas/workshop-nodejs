fetch('http://localhost:3000/produto')
    .then(res => res.json())
    .then(obj => obj.map(p => p.descricao))
    .then(produtosDescricao => console.log(produtosDescricao))
    .catch(err => console.log('Error ao criar lista de descrição', err));
