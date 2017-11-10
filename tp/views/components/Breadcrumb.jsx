const React = require('react');

class Breadcrumb extends React.Component {
  render() {
    return (
      <ul className="breadcrumb">
        <li className="breadcrumb__element">Inicio</li>
        {this.props.breadcrumbList && this.props.breadcrumbList.map((item, index) => <li className="breadcrumb__element" key={index}>{item.name}</li>)}
        {this.props.query && <li className="breadcrumb__element">"{this.props.query}"</li>}
      </ul>
    );
  }
}

module.exports = Breadcrumb;
