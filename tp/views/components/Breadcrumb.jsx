const React = require('react');

class Breadcrumb extends React.Component {
  render() {
    return (
      <ul className="breadcrumb">
        {this.props.breadcrumb && this.props.breadcrumb.map((element) => <li className="breadcrumb__element">{element}</li>)}
      </ul>
    );
  }
}

module.exports = Breadcrumb;
