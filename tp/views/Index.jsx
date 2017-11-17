const React = require('react');
const PropTypes = require('prop-types');
const Layout = require('./Layout');

// todos los componentes se definien con mayúsculas porque son clases.
class Index extends React.Component {
  render() {
    return (
      <Layout>
        <div className="search-hero">
          <img className="seach-hero__image"
               src="https://cdn1.iconfinder.com/data/icons/hawcons/32/698956-icon-111-search-128.png" alt="Buscar"/>
          <span className="seach-hero__title">
                Ingresa en la barra de búsqueda el producto que estas buscando!
            </span>
        </div>
      </Layout>
    );
  }
}

// Index.defaultProps = {
//     title: 'Titulo x defecto',
//     subtitle: 'Subtitulo x defecto',
//     showSubtitle: true,
//     tasks: []
// };

// indica el tipo de valor que espera
// proptypes es una dependencia aparte
// Index.proptypes = {
//     title: PropTypes.string,
//     tasks: PropTypes.array,
//     showSubtitle: PropTypes.boolean,
//     tasks: PropTypes.array
// };

module.exports = Index;
