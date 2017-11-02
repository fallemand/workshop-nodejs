const React = require('react');

class Breadcrumb extends React.Component {

  render() {
    const { category, query } = this.props;
    console.log(this.props)
    return (
      <ul className="breadcrumb">
        <li className="breadcrumb__element"><a href="/">Inicio</a></li>
        <li className="breadcrumb__element">Celulares y Teléfonos</li>
        <li className="breadcrumb__element">Celulares y Smartphones</li>
        <li className="breadcrumb__element">iPhone</li>
        <li className="breadcrumb__element">"iphone 6"</li>
      </ul>
    );
  }
}

module.exports = Breadcrumb;
