/**
 * Las funciones viven dentro de cada modulo y no ensucian lo global
 */
const CalculadoraStatic = require('./calculadoraStatic.js')
const Calculadora = require('./calculadora.js')

// Estatica

console.log(CalculadoraStatic.sumar(5,4));
console.log(CalculadoraStatic.restar(5,4));
console.log(CalculadoraStatic.multiplicar(5,4));
console.log(CalculadoraStatic.dividir(5,4));

// No estatica 

const calculadora = new Calculadora(5, 4)

console.log("Viejo a: " + calculadora.getA());
console.log("Viejo b: " + calculadora.getB());

calculadora.setA(100).setB(10);

console.log("Nuevo a: " + calculadora.getA());
console.log("Nuevo b: " + calculadora.getB());

console.log(calculadora);

console.log(calculadora.sumar());
console.log(calculadora.restar());
console.log(calculadora.multiplicar());
console.log(calculadora.dividir());