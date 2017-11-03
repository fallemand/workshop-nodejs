const React = require('react');

class Breadcrumb extends React.Component {
  render() {
    return (
      <ul className="breadcrumb">
        <li className="breadcrumb__element">
          <a href="/app/">
            Inicio
          </a>
        </li>
        <li className="breadcrumb__element">
          Hardcoded
        </li>
      </ul>
    );
  }
}

module.exports = Breadcrumb;
