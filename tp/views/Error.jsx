const React = require('react');
const Layout = require('./components/Layout');

class Error extends React.Component {
  render() {
    return (
      <div className="error">
        <img className="error__img" src="https://www.mercadolibre.com/org-img/mkt/error/img/herramienta_es.jpg" alt="Destornillador" />
        <h1 className="error__title">Detalle</h1>
        <div className="error__detail">{"error":"{"message":"Item with id asdasdasd not found.","error":"not_found","status":404,"cause":[]}"}"</div>
      </div>
    );
  }
}

module.exports = Error;
