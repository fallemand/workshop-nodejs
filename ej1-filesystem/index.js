/**
 * Created by cuanini on 10/9/17.
 */
const fs = require('fs');
const vowels = new RegExp(/a|e|i|o|u|á|é|í|ó|ú/, 'ig');

//Sync


console.log('inicio');
const text = fs.readFileSync('./text.txt', 'utf8');


const result = text.replace(vowels, 'i');

console.log(result);
fs.writeFileSync('output-sync.txt', result);
console.log('fin');

//Async
console.log('inicio');
fs.readFile('./text.txt', 'utf8', (err, data) => {
    const result = data.replace(vowels, 'i');
    fs.writeFile('output.txt', result, (err) => {
        console.log("El archivo se guardo exitosamente");
    });

});
console.log('fin');