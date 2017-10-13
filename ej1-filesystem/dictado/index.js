const fs = require('fs');
const vowels = new RegExp(/a|e|i|o|u|á|é|í|ó|ú/, 'ig');

// Sync
console.log('inicio');
const text = fs.readFileSync('../text.txt', 'utf8');
const result = text.replace(vowels, 'i');
console.log(result);
fs.writeFileSync('output-sync.txt', result);
console.log('fin');

// Async
console.log('inicio');
fs.readFile('../text.txt', 'utf8', (err, data) => {
  if(err) {
    console.log('error al leer el archivo');
  }
  const result = data.replace(vowels, 'i');
  fs.writeFile('output-async.txt', result, (err) => {
    console.log('El archivo se guardó exitosamente!');
  });
});
console.log('fin');





















// Sync
// const text = fs.readFileSync('./text.txt', 'utf8');
// const vowels = new RegExp(/a|e|i|o|u|á|é|í|ó|ú/, 'ig');
//
// const result = text.replace(vowels, 'i');
//
// console.log(result);


