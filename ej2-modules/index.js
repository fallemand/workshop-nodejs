/**
 * Created by cuanini on 10/9/17.
 */

const CalculadoraEstatica = require('./CalculadoraStatic');

//Sumar
console.log(CalculadoraEstatica.sumar(2, 4));

//Restar
console.log(CalculadoraEstatica.restar(2, 4));

//Multiplicar
console.log(CalculadoraEstatica.multiplicar(2, 4));

//Dividir
console.log(CalculadoraEstatica.dividir(2, 4));


const Calculadora = require('./Calculadora');
const calculadora = new Calculadora(2,4)

//Sumar
console.log(calculadora.sumar(2, 4));

//Restar
console.log(calculadora.restar(2, 4));

//Multiplicar
console.log(calculadora.multiplicar(2, 4));

//Dividir
console.log(calculadora.dividir(2, 4));

console.log(calculadora.setA(8).setB(2).sumar());