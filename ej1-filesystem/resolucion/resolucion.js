const fs = require('fs');

/**
 * Para levantar un json no es necesario hacer un readFile
 */
const replaces = require('../replaces.json')

console.log("Inicio");

fs.readFile('../text.txt', 'utf8', (err, data) => {

    Object.keys(replaces).forEach((key) => {

        if (replaces.hasOwnProperty(key)) {

            let regExp = new RegExp(key, 'ig');

            data = data.replace(regExp, replaces[key]);

            // Otra forma de replace
            // data = data.split(key).join(replaces[key]);
        }
    });

    // Otra forma de recorrer el json >> for (var key in replaces) {}
    // Otra forma de replace >> data = data.split(key).join(replaces[key]);
    fs.writeFile('./output.txt', data, (err) => {
        console.log("El archivo de ejercicio se guardó exitosamente!");
    });
});

console.log("Fin");