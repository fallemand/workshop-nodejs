const React = require('react');

class Search extends React.Component {
  render() {
    return (
        <div class="main__content">
            <div class="search-hero">
                <img class="seach-hero__image" src="https://cdn1.iconfinder.com/data/icons/hawcons/32/698956-icon-111-search-128.png" alt="Buscar" />
                <span class="seach-hero__title">
                Ingresa en la barra de búsqueda el producto que estas buscando!
                </span>
            </div>
        </div>
    );
  }
}

module.exports = Search;
