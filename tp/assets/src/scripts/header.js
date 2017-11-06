const React = require('react');
const ReactDom = require('react-dom');
const Header = require('../../../views/Header');

const container = document.querySelector('#header');

// Es el que se encarga de mapear el renderizado de lo que cambió.
ReactDom.render(
    <Header />,
    container
);
