const React = require('react');
const Layout = require('./components/Layout');

class Error extends React.Component {
  render() {
    const {
      heading,
      status,
      message,
    } = this.props;

    return (
      <Layout {...this.props}>
        <div className="error">
          <img className="error__img" src="https://www.mercadolibre.com/org-img/mkt/error/img/herramienta_es.jpg" alt="Destornillador" />
          <h1 className="error__title">
            {heading}
          </h1>
          <div className="error__detail">
            {message.toString()}
            {status}
          </div>
        </div>
      </Layout>
    );
  }
}

Error.defaultProps = {
  heading: '¡Ups! Ocurrió un error',
};

module.exports = Error;
