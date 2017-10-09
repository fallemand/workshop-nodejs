const fs = require('fs');

const text = fs.readFileSync('./text.txt', 'utf8');
const vowels = new RegExp(/a|e|i|o|u|á|é|í|ó|ú/, 'ig');

const result = text.replace(vowels, 'i');

console.log(result);

//Async

console.log('inicio');
fs.readFile('./text.txt', 'utf8', (err, data) => {
   const result = data.replace(vowels, 'i');
   fs.writeFile('output.txt', result, (err) => {
       console.log('El archivo se guardó exitosamente!');
   });
});