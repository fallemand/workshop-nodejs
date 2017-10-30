const React = require('react');

class SearchItem extends React.Component {

  currencySymbol(currency) {
    let symbol = '';
    switch(currency) {
      default: symbol = '$'
    }
    return symbol;
  }

  render () {
    const { item } = this.props;
    return (
        <a className="search-item" href={`app/items/${item.id}`}>
          <div className="search-item__picture">
            <img src={item.thumbnail} alt={item.title}></img>
          </div>
          <div className="search-item__description">
            <span className="search-item__price">{this.currencySymbol(item.currency_id)} {item.price}</span>
            {item.free_shipping && <i className="search-item__freeshipment"></i>}
            <p className="search-item__title">{item.title}</p>
          </div>
          <div className="search-item__location">{item.state}</div>
        </a>
    );
  }
}

module.exports = SearchItem;
