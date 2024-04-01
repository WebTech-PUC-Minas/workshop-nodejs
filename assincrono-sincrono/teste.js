const fs = require('fs');

// Operação de leitura Síncrona
console.log('Iniciando a leitura do arquivo de forma síncrona...');
try {
  const dataSync = fs.readFileSync('exemplo.txt', 'utf-8');
  console.log(dataSync);
} catch (err) {
  console.error('Erro ao ler o arquivo:', err);
}
console.log('Finalizando a leitura do arquivo de forma síncrona...');

// Operação de leitura Assíncrona
console.log('Iniciando a leitura do arquivo de forma assíncrona...');
const readFile = async () => {
  try {
    const dataAsync = await fs.promises.readFile('exemplo.txt', 'utf-8');
    console.log(dataAsync);
  } catch (error) {
    console.error('Erro ao ler o arquivo:', error)
  }
}
readFile();
console.log('Finalizando a leitura do arquivo de forma assíncrona...');
