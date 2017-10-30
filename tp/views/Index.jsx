const React = require('react');
const PropTypes = require('prop-types');
const Layout = require('./Layout');

class Index extends React.Component {

  render() {
    return  (
      <Layout title="titulo">
        <div class="main__content">
          <div class="search-hero">
            <img class="seach-hero__image" src="https://cdn1.iconfinder.com/data/icons/hawcons/32/698956-icon-111-search-128.png" alt="Buscar">
            </img>
              <span class="seach-hero__title">
        Ingresa en la barra de búsqueda el producto que estas buscando!
        </span>
          </div>
        </div>
      </Layout>
    )
  }
}

module.exports = Index;
