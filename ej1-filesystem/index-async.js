const fs = require('fs');
const keys = require('./keys.json');

fs.readFile('./text.txt', 'utf8', (err, data) => {
    if (err) throw err;
    let result = data;
    Object.keys(keys).forEach( (key) => {
        result = result.replace(new RegExp(key, 'ig'), keys[key]);
    });
    console.log(result);
});
