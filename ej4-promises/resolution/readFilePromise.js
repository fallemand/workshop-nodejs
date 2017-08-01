const fs = require('fs');
const vowels = new RegExp(/a|e|i|o|u|á|é|í|ó|ú/, 'ig');


let leerArchivo = (archivo) => {
  return new Promise((resolve, reject) => {
    let output = fs.readFileSync(archivo, 'utf8');
      resolve(output);
  })
}

leerArchivo('text.txt')
  .then(response => {
    console.log(response.replace(vowels, ''));
  })
  .catch(err => {
    console.log(err);
  })

console.log('Se ejecuta antes de leer el archivo');
