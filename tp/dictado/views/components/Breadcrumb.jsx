const React = require('react');

class Breadcrumb extends React.Component {

  render() {
    return (
      <ul className="breadcrumb">
        <li className="breadcrumb__element">Breadcrumb1</li>
        <li className="breadcrumb__element">Breadcrumb2</li>
        <li className="breadcrumb__element">Breadcrumb3</li>
      </ul>
    );
  }
}

module.exports = Breadcrumb;
