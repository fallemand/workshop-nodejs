const fs = require('fs');
const replaces = require('./replaces.json');
const result = '';

const text = fs.readFile(__dirname + './text', 'utf8', (err, data) => {

    let finalText = data;

    Object.keys(replaces).forEach(function(key) {
        finalText = finalText.replace(new RegExp(key, 'ig'), replace[key]);
    });

    fs.writeFile(__dirname + './async.txt', finalText, (err) => {
        console.log('El archivo se guardó OK');
    });
});
