const calc = require('./calc');

console.log('1 + 1 = ', calc.add(1, 1));
console.log('5 + 2 = ', calc.add(5, 2));

console.log('5 - 2 = ', calc.substract(5, 2));
console.log('10 - 5 = ', calc.substract(10, 5));

console.log('6 / 2 = ', calc.divide(6, 2));
console.log('10 / 5 = ', calc.divide(10, 5));
console.log('1 / 3 = ', calc.divide(1, 3));
console.log('1 / 0 = ', calc.divide(1, 0));

console.log('2 * 2 = ', calc.multiply(2, 2));
console.log('10 * 5 = ', calc.multiply(10, 5));
