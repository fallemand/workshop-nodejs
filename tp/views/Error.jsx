const React = require('react');
const PropTypes = require('prop-types');
const Layout = require('./components/Layout');

class Error extends React.Component {
  render() {
    const {
      imgSrc,
      heading,
      status,
      message,
    } = this.props;

    return (
      <Layout {...this.props}>
        <div className="error">
          <img className="error__img" src={imgSrc} />
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
  imgSrc: 'https://www.mercadolibre.com/org-img/mkt/error/img/herramienta_es.jpg',
  heading: '¡Ups! Ocurrió un error',
};

Error.propTypes = {
  imgSrc: PropTypes.string,
  heading: PropTypes.string,
  message: PropTypes.string,
  status: PropTypes.number,
};

module.exports = Error;
