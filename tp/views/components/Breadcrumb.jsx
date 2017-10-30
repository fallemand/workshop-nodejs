const React = require('react');

class Breadcrumbs extends React.Component {
  render() {
    return (
      <ul className="breadcrumb">
        <li className="breadcrumb__element">Breadcrumb 1</li>
        <li className="breadcrumb__element">Breadcrumb 2</li>
        <li className="breadcrumb__element">Breadcrumb 3</li>
      </ul>
    );
  }
}

module.exports = Breadcrumbs;
