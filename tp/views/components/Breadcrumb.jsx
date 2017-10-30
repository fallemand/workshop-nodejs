const React = require('react');
const PropTypes = require('prop-types');

class Breadcrumb extends React.Component {

  render() {
    console.log(this.props);
    const {elem, query} = this.props ;

    return (
      <div className="breadcrumb-container">
        <ul className="breadcrumb">
          <li className="breadcrumb__element"><a href="/">Inicio</a></li>
          {elem.map((elem) => <li className="breadcrumb__element">{{elem}}</li>)}
          {query && <li className="breadcrumb__element">{query}</li>}
        </ul>
      </div>
    )
  }
}

module.exports = Breadcrumb;
