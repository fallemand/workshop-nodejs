let fs = require('fs');
//let readFileWithPromise = require('./readFileWithPromise');

console.log('Leyendo el archivo con callback\n');
fs.readFile('./trabalenguas.txt', 'utf8', (err, data) => {
  if(err) {
    return console.error('Error al leer el archivo ' + err);
  } else {
    console.log(data);
  }  
});
console.log('Fin de leer el archivo con callback\n');

/*
console.log('Leyendo el archivo con promise\n');
readFileWithPromise('./trabalenguas.txt').then(res => {
    console.log(res);
}).catch(err => {
    console.error('Error al leer el archivo ' + err);
})
console.log('Fin de leer el archivo con promise\n');
*/
const readFileWithPromise = (filename, encoding = 'utf8') =>{
    return new Promise((resolve, reject) => {
        fs.readFile(filename, encoding, (err, data) => {
            if(err){
                reject(err);
            } else {
                resolve(data);    
            }
        });
    });
}

readFileWithPromise('./trabalenguas.txt').then(data => {
    return { data ,  otracosa :  'algo'}
}).then(res => {
    console.log(res)
}).catch(err => {
    console.error('Error al leer el archivo ' + err);
})

Promise.all([
    readFileWithPromise('./trabalenguas.txt'),
    readFileWithPromise('./readFileWithPromise.js'),
    readFileWithPromise('./trabalenguasd.txt').catch(err => err)
]).then( data => {
    console.log(data);
})
