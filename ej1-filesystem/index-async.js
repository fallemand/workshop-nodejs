const fs = require('fs');
const json = require('./replaces.json');


fs.readFile('./text.txt', 'utf8', (err, data) => {
    let result = data;
    Object.keys(json).forEach(key => {
        result = result.replace(new RegExp(key, 'ig'), json[key]);
    });
    fs.writeFile('output-async.txt', result, (err) => {
        console.log('El archivo se guardó exitosamente!');
    });
});
