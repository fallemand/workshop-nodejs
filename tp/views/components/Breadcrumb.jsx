const React = require('react');

class Breadcrumb extends React.Component {
  render() {
    const {
      query,
      categories,
    } = this.props;

    return (
      <ul className="breadcrumb">
        <li className="breadcrumb__element">
          <a href="/app/">
            Inicio
          </a>
        </li>

        {
          categories && categories.map((category) =>
            <li className="breadcrumb__element">
              {category}
            </li>
        )}

        {
          query &&
          <li className="breadcrumb__element">
            "{query}"
          </li>
        }

      </ul>
    );
  }
}

module.exports = Breadcrumb;
