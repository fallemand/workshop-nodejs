const React = require('react');

class Breadcrumb extends React.Component {
  render() {
    return (
      <ul className="breadcrumb">
        {this.props.breadcrumbList.map((item) => <li className="breadcrumb__element">{item}</li>)}
      </ul>
    );
  }
}

module.exports = Breadcrumb;
