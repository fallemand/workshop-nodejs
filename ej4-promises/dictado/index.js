const fs = require('fs');
const readFile = require('./readFileWithPromise.js');

fs.readFile('./trabalenguas.txt', 'utf8', (err, data) => {
    if(err) {
        console.log('Error al leer el archivo');
    } else {
        console.log(data);
    }
});

Promise.all([
    readFile('./trabalenguas.txt'),
    readFile('./trabalenguas.txt'),
    readFile('./noexiste.txt').catch(err => {return 'No existe, ok'})
]).then( data => {
    console.log(data);
}).catch(err => {
    console.log('Error');
});

Promise.all([
    readFile('./trabalenguas.txt'),
    readFile('./trabalenguas.txt'),
    readFile('./noexiste.txt').catch(err => 'No existe, ok'})
]).then( data => {
    console.log(data);
}).catch(err => {
    console.log('Error');
});

// Promises
readFile('./trabalenguas.txt')
    .then(data => {
        return {data, otraCosa: 'algo'};
    })
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });
