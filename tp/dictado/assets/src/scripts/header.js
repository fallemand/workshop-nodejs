const React = require('react');
const ReactDom = require('react-dom');
const Header  = require('../../../views/components/Header');

const container = document.querySelector('[data-js=header]');

/**
 * Render Header on browser
 */
ReactDom.render(
  <Header />,
  container
);
