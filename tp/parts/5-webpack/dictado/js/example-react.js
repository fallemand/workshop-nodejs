// Ejemplo 3: Compile React
const React = require('react');
const ReactDom = require('react-dom');
const ReactView = require('./ReactViewWithEvents');
const data = require('./data.json');
const container = document.querySelector('#react-app');

ReactDom.render(
  <ReactView data={data}/>,
  container,
);
