const React = require('react');
const ReactDOM = require('react-dom');
const Header = require('../../../views/components/Header');

/**
 * Get server state
 */
const props = window.__PRELOADED_STATE__;

/**
 * Render Header on browser
 */
ReactDOM.render(
  <Header {...props} />,
  document.getElementById('header'),
);
