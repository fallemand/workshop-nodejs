const React = require('react');
const PropTypes = require('prop-types');

class Breadcrumb extends React.Component {
  render() {
    const {
      rootLink,
      rootLinkText,
      rootKey,
      query,
      queryKey,
      categories,
    } = this.props;

    return (
      <ul className="breadcrumb">
        <li className="breadcrumb__element" key={rootKey}>
          <a href={rootLink}>
            {rootLinkText}
          </a>
        </li>

        {
          categories && categories.map((category, index) =>
            <li className="breadcrumb__element" key={index + 1}>
              {category}
            </li>
        )}

        {
          query &&
          <li className="breadcrumb__element" key={queryKey}>
            "{query}"
          </li>
        }

      </ul>
    );
  }
}

Breadcrumb.defaultProps = {
  rootLink: '/app/',
  rootLinkText: 'Inicio',
  rootKey: 0,
  queryKey: 99,
  categories: [],
};

Breadcrumb.propTypes = {
  rootLink: PropTypes.string,
  rootLinkText: PropTypes.string,
  rootKey: PropTypes.number,
  queryKey: PropTypes.number,
  categories: PropTypes.array,
};

module.exports = Breadcrumb;
