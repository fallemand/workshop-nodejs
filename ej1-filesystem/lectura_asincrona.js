const fs = require('fs');

const vowels = new RegExp(/a|e|i|o|u|á|é|í|ó|ú/, 'ig');

console.log("Inicio");

fs.readFile('./text.txt', 'utf8', (err, data) => {
    const result = data.replace(vowels, 'i');
    console.log(result);
});

console.log("Fin");