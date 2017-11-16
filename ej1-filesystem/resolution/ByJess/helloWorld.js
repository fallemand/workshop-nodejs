//Sync
const  fs = require('fs');

const text = fs.readFileSync('./archivoALeer.txt', 'utf8');
const vowels = new RegExp(/a|e|i|o|u|á|é|í|ó|ú/, 'ig');

const result = text.replace(vowels, 'i');

console.log(result);

//Async - No se queda esperando la resolucion del callback, sino q sigue el hilo de ejecución
// En node siempre el primer parametro deberá ser un error

fs.readFile('./archivoALeer.txt', 'utf8', (err, data) => {
    const result = text.replace(vowels, 'i');
    fs.writeFile('./output.txt', result, (err) => {
        console.log('El archivo se guardó OK');
    });
});
