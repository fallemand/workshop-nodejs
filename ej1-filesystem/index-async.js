const  fs = require('fs');
const json = require('./replaces.json');
let result = '';

console.log('Inicio de Lectura');

fs.readFile('./text.txt', 'utf8', (err, data) => {
    let finalText = data;
   Object.keys(json).forEach((keys) => {
       finalText = finalText.replace(new RegExp(keys, 'ig'), json[keys]);
   });
    console.log(finalText);
    fs.writeFile('./resolution.txt', finalText, (err) => {
        console.log('El archivo se guardó OK');
    });
});

console.log('Fin de Lectura');
