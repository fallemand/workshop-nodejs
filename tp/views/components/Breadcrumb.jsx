const React = require('react');

class Breadcrumb extends React.Component {
  render() {
    const breadcrumb = this.props.category ? this.props.category.path_from_root : [];
    const query = this.props.query;
    return (
      <ul className="breadcrumb">
        <li className="breadcrumb__element">Inicio</li>
        {breadcrumb && breadcrumb.map((element) => <li className="breadcrumb__element">{element.name}</li>)}
        {query && <li className="breadcrumb__element">"{query}"</li>}
      </ul>
    )
  }
}

module.exports = Breadcrumb;
