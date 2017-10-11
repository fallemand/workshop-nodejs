/**
 * Modulos de Node se importan con require
 * Para los modulos propios se pone la ruta ocmpleta
 */

const fs = require('fs'); // Modulo para manejo de archivos

console.log('Inicio');

/**
 * Por defecto los metodos son asincronos y deberian usarse
 * En este caso la lectura es sincrona, no continua hasta que termina de leer
 */
const text = fs.readFileSync('../text.txt', 'utf8');

const vowels = new RegExp(/a|e|i|o|u|á|é|í|ó|ú/, 'ig');

const result = text.replace(vowels, 'i');

console.log(result);

fs.writeFile('./output.txt', result, (err) => {
	console.log("El archivo se guardó exitosamente!");
});

console.log('Fin');