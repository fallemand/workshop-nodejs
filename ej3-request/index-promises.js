/**
 * Created by cuanini on 10/11/17.
 */
const fs = require('fs');

const readFile = require('./readFileWithPromise');

fs.readFile('./trabalenguas.txt', 'utf8', (err, data) => {
    if(err) {
        console.log('Error al leer el archivo')
    } else {
        console.log(data)
    }
});

console.log("Inicio");
readFile('./trabalenguas.txt', 'utf8')
    .then(data => {
        return {data, otraCosa: 'algo'};
    })
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log('Error');
        console.log(err);
    });

console.log("Fin");