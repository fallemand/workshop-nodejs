/**
 * Created by cuanini on 10/9/17.
 */
const fs = require('fs');
const replaces = require('./replaces.json');

fs.readFile('./text.txt', 'utf8', (err, data) => {
    let result = data;
    Object.keys(replaces).forEach(key => {
        const replaceKey = new RegExp(key, 'ig');
        result = result.replace(replaceKey, replaces[key]);
    });
    console.log(result);
    fs.writeFile('output-async.txt', result, (err) => {
        console.log("El archivo se guardo exitosamente");
    });
});

