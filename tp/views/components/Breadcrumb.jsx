const React = require('react');
const PropTypes = require('prop-types');

class Breadcrumb extends React.Component {

  render() {
    return  (
      <ul class="breadcrumb">
        <li className="breadcrumb__element">Breadcrumb 1</li>
        <li className="breadcrumb__element">Breadcrumb 2</li>
        <li className="breadcrumb__element">Breadcrumb 3</li>
      </ul>
    )
  }
}

module.exports = Breadcrumb;
