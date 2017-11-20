const React = require('react');
const Price = require('./PriceFormat');

class SearchItem extends React.Component {
  render() {
    const { id, picture, title, free_shipping, address, price } = this.props;
    return (
      <a className="search-item" href={`/app/item/${id}`}>
        <div className="search-item__picture">
          <img src={picture} alt={title}/>
        </div>
        <div className="search-item__description">
          <span className="search-item__price"><Price price={price.amount}/></span>
          {free_shipping && <i className="search-item__freeshipment"></i>}
          <p className="search-item__title">{title}</p>
        </div>
        <div className="search-item__location">{address.state_name}</div>
      </a>
    );
  }
}

module.exports = SearchItem;
