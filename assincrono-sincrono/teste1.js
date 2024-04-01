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
fs.readFile('exemplo.txt', 'utf-8', (err, dataAsync) => {
  if (err) {
    console.error('Erro ao ler o arquivo:', err);
  } else {
    console.log(dataAsync);
  }
});
console.log('Finalizando a leitura do arquivo de forma assíncrona...');

// // Operação de leitura Assíncrona encadeada
// fs.readFile('exemplo.txt', 'utf-8', (err, data1) => {
//   if (err) {
//     console.error('Erro ao ler o arquivo:', err);
//   } else {
//     fs.readFile('exemplo2.txt', 'utf-8', (err, data2) => {
//       if (err) {
//         console.error('Erro ao ler o arquivo:', err);
//       } else {
//         fs.readFile('exemplo3.txt', 'utf-8', (err, data3) => {
//           if (err) {
//             console.error('Erro ao ler o arquivo:', err);
//           } else {
//             console.log(data1);
//             console.log(data2);
//             console.log(data3);
//           }
//         });
//       }
//     });
//   }
// });

// // Operação de leitura Assíncrona com Promise

// const readFile = (file) => {
//   return new Promise((resolve, reject) => {
//     fs.readFile(file, 'utf-8', (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// readFile('exemplo.txt')
//   .then((data1) => {
//     console.log(data1);
//     return readFile('exemplo2.txt');
//   })
//   .then((data2) => {
//     console.log(data2);
//     return readFile('exemplo3.txt');
//   })
//   .then((data3) => {
//     console.log(data3);
//   })
//   .catch((err) => {
//     console.error('Erro ao ler o arquivo:', err);
//   });

// // Operação de leitura Assíncrona com async/await

// const readFiles = async () => {
//   try {
//     const data1 = await readFile('exemplo.txt');
//     console.log(data1);
//     const data2 = await readFile('exemplo2.txt');
//     console.log(data2);
//     const data3 = await readFile('exemplo3.txt');
//     console.log(data3);
//   } catch (err) {
//     console.error('Erro ao ler o arquivo:', err);
//   }
// };

// readFiles();

// // Operação de leitura Assíncrona com Promise.all

// Promise.all([
//   readFile('exemplo.txt'),
//   readFile('exemplo2.txt'),
//   readFile('exemplo3.txt'),
// ])
//   .then((data) => {
//     console.log(data[0]);
//     console.log(data[1]);
//     console.log(data[2]);
//   })
//   .catch((err) => {
//     console.error('Erro ao ler o arquivo:', err);
//   });

// // Operação de leitura Assíncrona com Promise.allSettled

// Promise.allSettled([
//   readFile('exemplo.txt'),
//   readFile('exemplo2.txt'),
//   readFile('exemplo3.txt'),
// ])
//   .then((data) => {
//     data.forEach((result) => {
//       if (result.status === 'fulfilled') {
//         console.log(result.value);
//       } else {
//         console.error('Erro ao ler o arquivo:', result.reason);
//       }
//     });
//   });

// Callbacks

function exemploCallback(callback) {
  setTimeout(() => {
    callback('Assincriono: Olá, mundo!');
  }, 1000);
}

function exemploSincrono(callback) {
  callback('Sincrono: Olá, mundo!');
}

exemploSincrono((result) => {
  console.log(result);
})

exemploCallback((result) => {
  console.log(result);
});

// function exemploCallbackComErro(callback) {
//   setTimeout(() => {
//     callback(new Error('Erro ao processar a mensagem'));
//   }, 1000);
// }

// exemploCallbackComErro((err) => {
//   if (err) {
//     console.error(err);
//   }
// });