const React = require('react');

class Breadcrumb extends React.Component {

  render() {
    const { category, query } = this.props;
    return (
      <ul className="breadcrumb">
        <li className="breadcrumb__element">
          <a href="/">Inicio</a>
        </li>
        {category && category.map((element) =>
           <li className="breadcrumb__element">{element}</li>
        )}
        {query && <li className="breadcrumb__element"><a href="/">{query}</a></li>}
      </ul>
    );
  }
}

module.exports = Breadcrumb;