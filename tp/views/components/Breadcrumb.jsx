const React = require('react');
const PropTypes = require('prop-types');

class Breadcrumb extends React.Component {

  render() {
    console.log(this.props);
    const {elements, query} = this.props ;

    return (
      <div className="breadcrumb-container">
        <ul className="breadcrumb">
          <li className="breadcrumb__element"><a href="/">Inicio</a></li>
          { elements && elements.map((elem) => <li className="breadcrumb__element">{{elem}}</li>)}
          { query && <li className="breadcrumb__element">{query}</li>}
        </ul>
      </div>
    )
  }
}

module.exports = Breadcrumb;
