
const replaceVowels = require('./utils.js').replaceVowels;
const replaceConsonants = require('./utils.js').replaceConsonants;

const text = 'Hola como estás?';
const resultVowels = replaceVowels(text, 'i');
const resultConsonants = replaceConsonants(text, 'i');

console.log('Replacing vowels: ', resultVowels);
console.log('Replacing consonants: ', resultConsonants);