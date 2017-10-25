const React = require('react');

class Breadcrumb extends React.Component {
  listBreadcrums(elements) {
    return elements.map((element) => {
      return <li className="breadcrumb__element">{element}</li>;
    });
  }
  
  render() {
    return (
      <ul class="breadcrumb">
        <li class="breadcrumb__element">
          <a href="/">Inicio</a>
        </li>
        {this.listBreadcrums(this.props.elements)}
      </ul>
    );
  }
}

module.exports = Breadcrumb;
