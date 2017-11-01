const React = require('react');

class SearchItem extends React.Component {
  hasFreeShipping(item) {
    return item.free_shipping ? <i className="search-item__freeshipment" /> : '';
  }
  render() {
    const { item } = this.props;
    return (
      <a className="search-item" href={`/app/items/${item.id}`}>
        <div className="search-item__picture">
          <img src={item.thumbnail} alt={item.title} />
        </div>
        <div className="search-item__description">
          <span className="search-item__price">$ {item.price}</span>
          {this.hasFreeShipping(item)}
          <p className="search-item__title">{item.title}</p>
        </div>
        <div className="search-item__location">{item.city_name}</div>
      </a>
    );
  }
}

module.exports = SearchItem;
