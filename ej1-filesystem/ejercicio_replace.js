const fs = require('fs');

/**
 * Para levantar un json no es necesario hacer un readFile
 */
const replaces = require('./replaces.json')

console.log("Inicio");

fs.readFile('./text.txt', 'utf8', (err, data) => {

    Object.keys(replaces).forEach((key, val) => {
        console.log(replaces[key]);
    });

    for (var key in replaces) {

        if (replaces.hasOwnProperty(key)) {
            
            // Replace all
            data = data.split(key).join(replaces[key]);
        }
    }
        
    console.log(data);
});

console.log("Fin");