// const fs = require('fs');
// const readFile = require('./readFileWithPromise.js');
//
// fs.readFile('./trabalenguas.txt', 'utf8', (err, data) => {
//     if(err) {
//         console.log('Error al leer el archivo');
//     } else {
//         console.log(data);
//     }
// });
//
// Promise.all([
//     readFile('./trabalenguas.txt'),
//     readFile('./trabalenguas.txt'),
//     readFile('./noexiste.txt').catch(err => {return 'No existe, ok'})
// ]).then( data => {
//     console.log(data);
// }).catch(err => {
//     console.log('Error');
// });
//
// Promise.all([
//     readFile('./trabalenguas.txt'),
//     readFile('./trabalenguas.txt'),
//     readFile('./noexiste.txt').catch(err => 'No existe, ok'})
// ]).then( data => {
//     console.log(data);
// }).catch(err => {
//     console.log('Error');
// });
//
// // Promises
// readFile('./trabalenguas.txt')
//     .then(data => {
//         return {data, otraCosa: 'algo'};
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(err);
//    });

const readFileWithPromise = require('./readFileWithPromise');

console.log('Leyendo el archivo con callback\n');
fs.readFile('./trabalenguas.txt', 'utf8', (err, data) => {
  if (err) return console.error('Error al leer el archivo ' + err);
  console.log(data);
});
console.log('Fin de leer el archivo con callback\n');

console.log('Leyendo el archivo con promise\n');
readFileWithPromise('./trabalenguas.txt').then(res => {
  console.log(res);
}).catch(err => {
  console.error('Error al leer el archivo ' + err);
});
console.log('Fin de leer el archivo con promise\n');
