const  fs = require('fs');
const json = require('./keys.json');
let result = '';

console.log('Inicio de Lectura');

//Async - No se queda esperando la resolucion del callback, sino q sigue el hilo de ejecución
// En node siempre el primer parametro deberá ser un error

fs.readFile('./archivoALeer.txt', 'utf8', (err, data) => {
    if (err) throw err;
    let finalText = data;
    Object.keys(json).forEach((keys) => {
        finalText = finalText.replace(new RegExp(keys, 'ig'), json[keys]);
    });
    console.log(finalText);
    fs.writeFile('./outputAsync.txt', finalText, (err) => {
        if (err) throw err;
        console.log('El archivo se guardó OK');
    });
});

console.log('Fin de Lectura');
