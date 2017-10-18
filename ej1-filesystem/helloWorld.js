const fs = require('fs');

console.log(fs);

const voewls = new RegExp(/a|e|i|o|á|é|í|ó|ú/, 'ig');

//Sync
const text = fs.readFileSync('./text.txt', 'utf8');
const results = text.replace(voewls, 'i');
fs.writeFile('output.txt', results);
console.log(results);

console.log('fin');

// Async
console.log('inicio');
fs.readFile('./text.txt', 'utf8', (err, data) => {
    const text = fs.readFileSync('./text.txt', 'utf8');
    const results = text.replace(voewls, 'i');
    fs.writeFile('output.txt', result, (err) => {
        console.log('El archivo se guardó con éxito!');
    });
    console.log(results);
});

console.log('fin');