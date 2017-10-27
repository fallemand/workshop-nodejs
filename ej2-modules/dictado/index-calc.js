// With static methods
const CalculadoraStatic = require('./CalculadoraStatic');

console.log('------- STATIC ----------');

console.log('sumar');
console.log(CalculadoraStatic.sumar(2, 4));

console.log('restar');
console.log(CalculadoraStatic.restar(2, 4));

console.log('multiplicar');
console.log(CalculadoraStatic.multiplicar(2, 4));

console.log('dividir');
console.log(CalculadoraStatic.dividir(2, 4));


// Without static methods
const Calculadora = require('./Calculadora');
const calculadora = new Calculadora(2, 4);

console.log('------- NORMAL ----------');

console.log('sumar');
console.log(calculadora.sumar());

calculadora.setA(4);
console.log('SetA: ' + calculadora.getA());

calculadora.setB(5);
console.log('SetB: ' + calculadora.getB());

console.log('sumar');
console.log(calculadora.sumar());

console.log('toString');
console.log(calculadora.toString());
