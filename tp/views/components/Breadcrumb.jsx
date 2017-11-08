const React = require('react');

class Breadcrumb extends React.Component {

  render() {
    const { category, query } = this.props;
    

    return (
      <ul className="breadcrumb">
        <li className="breadcrumb__element"><a href="/">Inicio</a></li>
        {this.props.breadcrumb && this.props.breadcrumb.map((category, index) =>
          <li key={index} className="breadcrumb__element">{category.name}</li>
        )}
        {query && <li className="breadcrumb__element">"{query}"</li>}
      </ul>
    );
  }
}

module.exports = Breadcrumb;
