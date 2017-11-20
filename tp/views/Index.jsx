const React = require('react');
const PropTypes = require('prop-types');
const Layout = require('./components/Layout');

class Index extends React.Component {
  render() {
    const {
      imgSrc,
      message,
    } = this.props;

    return (
      <Layout {...this.props}>
        <div className="search-hero">
          <img className="seach-hero__image" src={imgSrc} />
          <span className="seach-hero__title">
            {message}
          </span>
        </div>
      </Layout>
    );
  }
}

Index.defaultProps = {
  imgSrc: 'https://cdn1.iconfinder.com/data/icons/hawcons/32/698956-icon-111-search-128.png',
  message: 'Ingresa el producto que estás buscando.',
};

Index.propTypes = {
  imgSrc: PropTypes.string,
  message: PropTypes.string,
};

module.exports = Index;
