const React = require('react');
const ReactDom = require('react-dom');
const Header = require('../../../views/components/Header');

const container = document.querySelector('[data-js=header]');

/**
 * Get server state
 */
const props = window.__PRELOADED_STATE__;

/**
 * Render Header on browser
 */
ReactDom.render(
  <Header {...props} />,
  container
);
