const React = require('react');

class Breadcrumb extends React.Component {
  listBreadcrums(elements) {
    return elements.map((element, index) => {
      return <li key={index} className="breadcrumb__element">{element.name}</li>;
    });
  }

  render() {
    return (
      <ul className="breadcrumb">
        <li className="breadcrumb__element">
          <a href="/">Inicio</a>
        </li>
        {this.props.categories && this.listBreadcrums(this.props.categories)}
        {this.props.query ? <li className="breadcrumb__element">"{this.props.query}"</li> : ''}
      </ul>
    );
  }
}

module.exports = Breadcrumb;
