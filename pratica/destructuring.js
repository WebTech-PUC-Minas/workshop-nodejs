// treinando destructuring

const pessoa = {
    nome: 'Maria',
    idade: 20,
    cidade: 'São Paulo'
}

const { nome, cidade } = pessoa

const endereço = {
    rua: 'Rua dos pinheiros',
    numero: 1293
}

const { rua, numero } = endereço

const pessoaNovosDados = {  ...pessoa, ...endereço };
const pessoaNovosDados2 = {  ...pessoa, ...endereço, cidade: 'Fortaleza' };

console.log("Nome:", nome);
console.log("Cidade:", cidade);
console.log("Pessoa:", pessoaNovosDados);
console.log("Pessoa2:", pessoaNovosDados2);
