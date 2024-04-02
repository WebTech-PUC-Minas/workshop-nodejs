# Workshop Node.js

<!--Breve descrição do projeto aqui -->


## Tecnologias utilizadas

Node.js, Express, PostgreSQL e Sequelize.

<!-- Link com os badges para inserir abaixo https://devicon.dev/ -->
<div style="display: flex; gap: 10px;">
  <img width="50px" src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white">             <!--coloque o link do ícone no src -->
  <img width="50px" src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge">
  <img width="50px" src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white">
  <img width="50px" src="https://img.shields.io/badge/sequelize-323330?style=for-the-badge&logo=sequelize&logoColor=blue">
</div>

## Onde Aplicar

Desenvolvimento de API REST com DB e segurança.

# Sumário

* [Instalações](#instalações)
  * [Pré-Requisitos](#pré-requisitos)
  * [Recursos adicionais](#recursos-adicionais)
* [Roadmap](#roadmap)
  * [STEP 1 - Criar aplicação de arquivos estáticos](#step-1---criar-aplicação-de-arquivos-estáticos)
  * [STEP 2 - Iniciando integração com o banco de dados](#step-2---iniciando-integração-com-o-banco-de-dados)
  * [STEP 3 - Segurança usando tokens (JWT)](#step-3---segurança-usando-tokens-jwt)
* [Contato](#contato)
* [License](#license)


## Instalações

Acesse o site Node.js e baixe a versão LTS e instale em seu computador.

Acesse o site do PostgreSQL e instale em seu computador.
 
### Pré-Requisitos

- **[Node.js](https://nodejs.org/en/download)** 

- **[PostgreSQL](https://www.postgresql.org/download/)**

 API Platform:

- **[Insomnia](https://insomnia.rest/download)**

- **[Postman](https://www.postman.com/downloads/)**

### Recursos adicionais

- **[Express](https://expressjs.com/)**

- **[Sequelize](https://sequelize.org/)**


## Roadmap

### STEP 1 - Criar aplicação de arquivos estáticos

Crie uma pasta para o projeto em seu ambiente de desenvolvimento e navegue até ela no terminal. Inicie o projeto Node.js utilizando o comando `npm init -y`. Isso criará dois arquivos: `package.json` e `package-lock.json`, que são essenciais para gerenciar as dependências do projeto.

```bash
npm init -y
```

- O nodemon é uma ferramenta que ajuda a automatizar a reinicialização do servidor sempre que houver alterações no código. Isso evita a necessidade de reiniciar manualmente o servidor a cada modificação.

```bash
npm install -g nodemon
```

- O Express é um framework web para Node.js, amplamente utilizado para criar aplicativos web e APIs.

```bash
npm install express
```
- O pg permite conectar-se a um banco de dados PostgreSQL a partir do Node.js.

```bash
npm install pg
```

- O Sequelize é um ORM (Object-Relational Mapping) para Node.js, que facilita a interação com bancos de dados relacionais como o PostgreSQL, oferecendo abstrações para manipulação de dados.

```bash
npm install sequelize
```

### Organização de diretórios

Organize sua aplicação em diretórios de acordo com a arquitetura desejada. Por exemplo:

```bash
/meu_projeto
├── /node_modules
├── /public
│   ├── /index.html
│   ├── /style.css
│   └── /script.js
├── db.js
├── router.js
├── server.js
├── package.json
└── package-lock.json

```

### Código para o functionamento do servidor (server.js)

Funcionamento do servidor

O arquivo server.js é responsável por iniciar e configurar o servidor Express para a aplicação. Ele utiliza o framework express para criar um servidor HTTP, define rotas e associa essas rotas a diferentes funcionalidades da aplicação.


* `path`: Um módulo interno do Node.js utilizado para manipular caminhos de arquivo e diretórios.

* `routerProdutos`: Roteador responsável por lidar com as requisições relacionadas a produtos na aplicação.

O servidor é configurado para entender o formato JSON nas requisições, o que permite receber e enviar dados no formato JSON, usando o middleware `express.json()`. Além disso, ele serve arquivos estáticos na rota raiz '/' a partir do diretório 'public'.

Arquivos `server.js`:

```js
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

```

O arquivo `router.js` define as rotas relacionadas aos produtos na aplicação. Ele utiliza o módulo `express.Router()` para criar um roteador que será posteriormente associado ao servidor Express.

Este roteador define uma rota GET '/' que retorna todos os produtos da base de dados, representada pelo arquivo `db.js`.

Arquivo `router.js`:

```js
const express = require('express');
const router = express.Router();
const db_produtos = require('./db');

router.get('/', (req, res) => {
    res.status(200).json(db_produtos);
})

module.exports = router;
```

Arquivo `db.js` com os dados dos produtos:

```js
const db_produtos = [
    { id: 1, descricao: 'Camiseta branca', valor: 29.99, marca: 'Marca A' },
    { id: 2, descricao: 'Calça jeans', valor: 59.99, marca: 'Marca B' },
    { id: 3, descricao: 'Tênis preto', valor: 79.99, marca: 'Marca C' },
    { id: 4, descricao: 'Relógio de pulso', valor: 149.99, marca: 'Marca D' },
    { id: 5, descricao: 'Óculos de sol', valor: 39.99, marca: null },
    { id: 6, descricao: 'Mochila escolar', valor: 49.99, marca: 'Marca E' },
    { id: 7, descricao: 'Fone de ouvido sem fio', valor: 89.99, marca: 'Marca F' },
    { id: 8, descricao: 'Carregador portátil', valor: 19.99, marca: 'Marca G' },
    { id: 9, descricao: 'Livro de ficção científica', valor: 14.99, marca: 'Editora X' },
    { id: 10, descricao: 'Caneta esferográfica', valor: 2.99, marca: 'Marca Y' }
];
  
module.exports = db_produtos;
```

Ao finalizar essa etapa crie um arquivo `.gitignore` e adicione `**/node_modules`, para não ser enviado ao repositório.

### STEP 2 - Iniciando integração com o banco de dados

### Organização de diretórios

A partir do projeto desenvolvido na etapa anterior iremos iniciar nossa API com integração ao banco de dados.

Adicionando arquivo produto.js que serve como model pro sequelize.

Por exemplo:

```bash
/meu_projeto
├── /node_modules
├── /public
│   ├── /index.html
│   ├── /style.css
│   └── /script.js
├── produto.js
├── db.js
├── router.js
├── server.js
├── package.json
└── package-lock.json

```


| Método | Rota | Descrição |
| :------: | ---- | --------- |
| GET | `/produtos` | Consultar os produtos criados |
| GET | `/produtos/{id}` | Consultar o produto criado pelo ID |
| POST | `/produtos` | Criar um novo produtos |
| PUT | `/produtos/{id}` | Atualizar dados do produtos pelo ID |
| DELETE | `/produtos/{id}` | Deletar produto cadastrado pelo ID |

Arquivo `server.js`

```js

const express = require('express');
const path = require('path');

const routerProdutos = require('./router');

const { connectionDb } = require('./db');
const app = express();

connectionDb();

app.use(express.json());

app.use('/produtos', routerProdutos);

app.use('/', express.static(path.join(__dirname, 'public')));

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
})
```

Inicalmente vamos criar a conexão com o banco de dados estabelendo os parametros de configuração no arquivo `db.js`.

Arquivo `db.js`:

```js

const sequelize = new Sequelize({
  host: `localhost`,
  port: 5432,
  database: 'workshop_nodejs',
  username: 'postgres',
  dialect: 'postgres',
  senha: '123456'
})

```

Apos definir uma instancia do sequelize crie uma autenticação de conexão com o banco de dados:

```js
try {
  sequeliz.autenticate();
  console.log('Banco de dados conectado com sucesso.')
} catch (err) {
  console.error('Não foi possivel conectar ao banco de dados!', err);
}
```

### STEP 3 - Segurança usando tokens (JWT)






## Contato

LinkedIn - [WebTech PUC Minas](https://www.linkedin.com/company/webtech-puc-minas/).

GitHub: [WebTech PUC Minas](https://github.com/WebTech-PUC-Minas)

## License

[LICENSE](./LICENSE)