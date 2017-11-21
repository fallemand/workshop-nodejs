const React = require('react');

class Breadcrumbs extends React.Component {
  render() {
    const { cats, query } = this.props;
    return (
      <ul className="breadcrumb">
        <li className="breadcrumb__element"><a href="/">Inicio</a></li>
        {cats && cats.map((cat) =>
          <li className="breadcrumb__element">{cat}</li>
        )}
        {query && <li className="breadcrumb__element">"{query}"</li>}
      </ul>
    );
  }
}

module.exports = Breadcrumbs;
