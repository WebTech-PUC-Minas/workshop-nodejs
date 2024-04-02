document.addEventListener("DOMContentLoaded", function() {
    fetch('/produtos')
      .then(response => response.json())
      .then(data => {
        console.log('Produtos:', data);
        const container = document.getElementById('produto-container');
        data.forEach(produto => {
          const card = createCard(produto);
          container.appendChild(card);
        });
      })
      .catch(error => {
        console.error('Erro ao buscar os produtos:', error);
      });
  });
  
  function createCard(produto) {
    const card = document.createElement('div');
    card.classList.add('card');
  
    const titulo = document.createElement('h3');
    titulo.textContent = produto.descricao;
    card.appendChild(titulo);
  
    const marca = document.createElement('p');
    marca.innerHTML = `<span>Marca:</span> ${produto.marca || 'N/A'}`;
    card.appendChild(marca);
  
    const valor = document.createElement('p');
    valor.innerHTML = `<span>Valor:</span> $${produto.valor}`;
    card.appendChild(valor);
  
    return card;
  }
  