let fs = require('fs');
let readFileWithPromise = require('./readFileWithPromise');

console.log('Leyendo el archivo con callback\n');
fs.readFile('./trabalenguas.txt', 'utf8', (err, data) => {
  if(err) return console.error('Error al leer el archivo ' + err);
  console.log(data);
});
console.log('Fin de leer el archivo con callback\n');

console.log('Leyendo el archivo con promise\n');
readFileWithPromise('./trabalenguas.txt').then(res => {
    console.log(res);
}).catch(err => {
    console.error('Error al leer el archivo ' + err);
})
console.log('Fin de leer el archivo con promise\n');
