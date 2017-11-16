//Sync
const  fs = require('fs');

let text = fs.readFileSync('./archivoALeer.txt', 'utf8');
const vowels = new RegExp(/a|e|i|o|u|á|é|í|ó|ú/, 'ig');

const result = text.replace(vowels, 'i');

fs.writeFileSync('outputSync.txt', result, 'utf8');

console.log('El archivo se guardó OK');
console.log(result);