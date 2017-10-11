const fs = require('fs');
const readFile = require('./readFileWithPromise');

fs.readFile('../trabalenguas.txt', 'utf8', (err, data) => {
  if(err) {
    console.log('Error');
  } else {
    console.log(data);
  }
});


console.log('Inicio');
readFile('../trabalenguas.txt', 'utf8').then(data => {
  console.log(data);
}).catch(err => {
  console.log(err);
});
console.log('Fin');

