const React = require('react');
const PropTypes = require('prop-types');

class Breadcrumb extends React.Component {

  render() {
    const { category, query } = this.props;
    return  (
      <ul className="breadcrumb">
        {category && category.map((element) =>
          <li className="breadcrumb__element"><a href="/">{element.name}</a></li>
        )}
        {query && <li className="breadcrumb__element">"{query}"</li>}
      </ul>
    )
  }
}

module.exports = Breadcrumb;
