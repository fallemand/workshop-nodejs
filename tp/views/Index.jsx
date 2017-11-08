const React = require('react');
const Layout = require('./components/Layout');

class Index extends React.Component {
  render() {
    const {
      message,
    } = this.props;

    return (
      <Layout {...this.props}>
        <div className="search-hero">
          <img className="seach-hero__image" src="https://cdn1.iconfinder.com/data/icons/hawcons/32/698956-icon-111-search-128.png" alt="Buscar" />
          <span className="seach-hero__title">
            {message}
          </span>
        </div>
      </Layout>
    );
  }
}

Index.defaultProps = {
  message: 'Ingresa el producto que estás buscando.',
};

module.exports = Index;
