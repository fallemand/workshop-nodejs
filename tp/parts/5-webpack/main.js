// Ejemplo 1: Transpile ES6

//const bar = 'foo';

//const showAlert = (msg) => {
//	alert(msg);
//}

//showAlert('test');


// Ejemplo 2: Require File

//const tasks = require('./data.json');

//tasks.tasks.map((task) => {
//	alert(task);
//})

// Ejemplo 3: Compile React
const React = require('react');
const ReactDom = require('react-dom');
const ReactView = require('./ReactView');
const data = require('./data.json');
const body = document.querySelector('body');

ReactDom.render(
  <ReactView data={data} />,
  body,
);