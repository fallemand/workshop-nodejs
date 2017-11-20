const React = require('react');

class Breadcrumb extends React.Component {

  render() {
    var category = this.props.category;
    var query = this.props.query;
    return (
      <ul className="breadcrumb">
        <li className="breadcrumb__element">
          <a href="/">Inicio</a>
        </li>
        {category && category.map((element) =>
           <li className="breadcrumb__element" key={element.id}>{element.name}</li>
        )}
        {query && <li className="breadcrumb__element"><a href="/">{query}</a></li>}
      </ul>
    );
  }
}

module.exports = Breadcrumb;
