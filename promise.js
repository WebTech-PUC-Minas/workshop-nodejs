fetch('http://localhost:3000/produtos')
    .then(res => res.json())
    .then(obj => obj.map(p => p.descricao))
    .then(listDescricao => console.log(listDescricao))
    .catch(err => console.log('Error ao criar lista de descrição', err));
