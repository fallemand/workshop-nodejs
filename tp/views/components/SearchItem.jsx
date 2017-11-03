const React = require('react');

class SearchItem extends React.Component {
  render() {
    const {
      id,
      title,
      price,
      condition,
      free_shipping,
      picture,
    } = this.props;

    return (
      <a className="search-item" href={`/app/items/${id}`}>
        <div className="search-item__picture">
          <img src={picture} alt={title} />
        </div>
        <div className="search-item__description">
          <span className="search-item__price">
            $ {price.amount}
          </span>
          {
            free_shipping &&
            <i className="search-item__freeshipment"></i>
          }
          <p className="search-item__title">
            {title}
          </p>
        </div>
        <div className="search-item__location">
          Hardcoded Location
        </div>
      </a>
    );
  }
}

module.exports = SearchItem;
