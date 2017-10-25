const React = require('react');
const PropTypes = require('prop-types');
const Layout = require('./components/Layout');

class Index extends React.Component {
  showTasks(tasks) {
    return tasks.map((task) => {
      return <li key={task}>{task}</li>;
    });
  }
  render() {
    return (
      <Layout {...this.props}>
        <div className="main__content">
          <div className="search-hero">
            <img
              className="seach-hero__image"
              src="https://cdn1.iconfinder.com/data/icons/hawcons/32/698956-icon-111-search-128.png"
              alt="Buscar"
            />
            <span className="seach-hero__title">Ingresa en la barra de búsqueda el producto que estas buscando!</span>
          </div>
        </div>
      </Layout>
    );
  }
}

Index.defaultProps = {
  title: 'Título por defecto',
  subtitle: 'Subtítulo por defecto',
  showSubtitle: true,
  tasks: [],
};

Index.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  tasks: PropTypes.array,
  showSubtitle: PropTypes.bool,
};

module.exports = Index;
