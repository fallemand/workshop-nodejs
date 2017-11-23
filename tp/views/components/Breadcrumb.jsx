const React = require('react');
const PropTypes = require('prop-types');

class Breadcrumb extends React.Component {

  render() {
    const {path_from_root, query} = this.props;
    return (
      <div className="breadcrumb-container">
        <ul className="breadcrumb">
          <li className="breadcrumb__element"><a href="/">Inicio</a></li>
          { path_from_root && path_from_root.map((elem) => <li key={elem.id} className="breadcrumb__element">{elem.name}</li>)}
          { query && <li className="breadcrumb__element">{query}</li>}
        </ul>
      </div>
    )
  }
}

Breadcrumb.propTypes = {
  path_from_root: PropTypes.array,
  query: PropTypes.string
};

module.exports = Breadcrumb;
