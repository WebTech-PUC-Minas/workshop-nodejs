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

Nesta etapa, vamos integrar nossa aplicação Node.js com um banco de dados PostgreSQL utilizando o Sequelize como ORM (Object-Relational Mapping). Aqui está a organização dos diretórios e a descrição das funcionalidades que serão implementadas:

### Organização de diretórios

A partir do projeto desenvolvido na etapa anterior, iremos adicionar o arquivo produto.js, que servirá como um modelo para o Sequelize, e criar as rotas CRUD para manipulação dos produtos.

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
### Descrição das Rotas

| Método | Rota | Descrição |
| :------: | ---- | --------- |
| GET | `/produtos` | Consultar os produtos criados |
| GET | `/produtos/{id}` | Consultar o produto criado pelo ID |
| POST | `/produtos` | Criar um novo produtos |
| PUT | `/produtos/{id}` | Atualizar dados do produtos pelo ID |
| DELETE | `/produtos/{id}` | Deletar produto cadastrado pelo ID |

O arquivo `server.js` é responsável por iniciar o servidor Express e definir as rotas da nossa API. Além disso, ele também estabelece a conexão com o banco de dados.

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

O `arquivo db.js` contém a configuração e a conexão com o banco de dados PostgreSQL usando o Sequelize.

```js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  host: `localhost`,
  port: 5432,
  database: 'workshop_nodejs',
  username: 'postgres',
  dialect: 'postgres',
  senha: '123456'
})

```

```js
async function connectToDb() {

    try {
        await sequelize.authenticate();
        console.log("Conectado ao banco de dados com sucesso!")
    } catch (error) {
        console.error("Não foi possivel conectar ao banco de dados!", error);
    }
    
}
```

O arquivo `produto.js` define o modelo de dados para a tabela de produtos usando o Sequelize.

```js
const { DataTypes } = require('sequelize');
const { sequelize } = require('./db');

const Produtos = sequelize.define('produtos', {
    id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true
    },
    descricao: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    valor: {
        type: DataTypes.DECIMAL(10,10),
        allowNull: false
    },
    marca: {
        type: DataTypes.STRING(25),
        allowNull: false
    }
}, {
    timestamps: false
})

module.exports = Produtos;
```

### Implementação

As rotas para a manipulação dos produtos são definidas no arquivo router.js, utilizando o Express e o modelo de produto criado com o Sequelize.


```js
const express = require('express');
const routerProdutos = express.Router();
const Produtos = require('./produtos');

// Rota para consultar todos os produtos
routerProdutos.get('/', async (req, res) => {

    const produtos = await Produtos.findAll();

    res.status(200).json(produtos);
})

module.exports = routerProdutos;
```

Agora implente as rotas a demais operações do CRUD para a nossa API com os códigos a seguir:

```js
// Outras rotas para manipulação dos produtos (GET, POST, PUT, DELETE)
routerProdutos.get('/:id', async (req, res) => { ... })

routerProdutos.post('/', async (req, res) => { ... })

routerProdutos.put('/:id', async (req, res) => { ... })

routerProdutos.delete('/:id', async (req, res) => { ... })
```

### STEP 3 - Middlewares

No Node.js e de frameworks como o Express.js, os middlewares são funções que têm acesso aos objetos de solicitação (req), resposta (res) e à próxima função de middleware na pilha de execução. Eles podem executar tarefas como validar dados, manipular cabeçalhos HTTP, fazer log de informações, e muito mais. Os middlewares são empilhados e executados em uma sequência específica, permitindo a modularização e a reutilização de funcionalidades em aplicações web.

### JSON parser

Este middleware é responsável por analisar os corpos das solicitações HTTP com formato JSON. Ele é utilizado para facilitar o processamento de dados JSON enviados para o servidor, tornando-os acessíveis no objeto `req.body` para manipulação posterior no código.

```js
app.use(express.json())
```

### Cors

O middleware Cors (Cross-Origin Resource Sharing) é utilizado para habilitar o acesso de recursos entre diferentes origens (domínios). Ele permite que um servidor especifique a quais origens ele está disposto a conceder acesso aos recursos, protegendo assim contra solicitações cross-site scripting (XSS) e outras vulnerabilidades.

```js
app.use(express.cors())
```

### Rotas

Este middleware define as rotas da aplicação. Ele especifica o caminho (path) base para o qual as rotas definidas posteriormente serão montadas. Por exemplo, se `/rota` for o caminho base, então todas as rotas definidas em `variableRota` serão acessíveis através de URLs que começam com `/rota`.

```js
app.use('/rota', variableRota)
```

### Rotas 404

Este middleware é utilizado para lidar com solicitações para URLs que não correspondem a nenhuma rota definida anteriormente na aplicação. Ele envia um arquivo HTML de página de erro 404 (`404.html`) quando uma solicitação para uma rota desconhecida é recebida.

```js
const path = require('path');
app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'public', '404.html'))
})
```

Essas descrições fornecem uma explicação clara sobre o propósito e o funcionamento de cada middleware em seu código Node.js.

## Contato

LinkedIn - [WebTech PUC Minas](https://www.linkedin.com/company/webtech-puc-minas/).

GitHub: [WebTech PUC Minas](https://github.com/WebTech-PUC-Minas)

## License

[LICENSE](./LICENSE)