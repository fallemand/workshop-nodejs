const React = require('react');

class Breadcrumb extends React.Component {

  render() {
    const { category, query } = this.props;
    return (
      <ul className="breadcrumb">
        {category.map((element) =>
          <li class="breadcrumb__element">${element.name}</li>
        )}
        <li class="breadcrumb__element">"${query}"</li>
      </ul>
    );
  }
}

module.exports = Breadcrumb;
