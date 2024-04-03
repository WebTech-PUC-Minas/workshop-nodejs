const fs = require('fs');


// Lendo arquivo Sincrono
console.log('Sincrino: Iniciando a leitura do arquivo...');
const data = fs.readFileSync('pratica.txt', 'utf8');
console.log(data);
console.log('Sincrino: Finalizando a leitura do arquivo...');

// Lendo arquivo Assincrono
console.log('Assincrino: Iniciando a leitura do arquivo...');
fs.readFile('pratica.txt', 'utf8', (err, data) => {
    console.log(data);
    if (err) {
        console.log(err);
    }
})
console.log('Assincrino: Finalizando a leitura do arquivo...');