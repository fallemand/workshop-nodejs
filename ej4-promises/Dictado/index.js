let readFileWithPromise = require('./readFileWithPromise');

readFileWithPromise('./trabalenguas.txt').then(res => {
    console.log(res);
}).catch(err => {
    console.error('Error al leer el archivo ' + err);
})
