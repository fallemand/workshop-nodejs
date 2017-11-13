const React = require('react');

class SearchItem extends React.Component {
    render() {
        const { item } = this.props;
        return (
            <a class="search-item" href={`/app/items/${item.id}`}>
              <div className="search-item__picture">
                <img src={item.thumbnail} />
              </div>
              <div className="search-item__description">
                <span className="search-item__price">${item.price.amount}</span>
                {item.free_shipping && <i className="search-item__freeshipment"></i> }
                <p className="search-item__title">{item.title}</p>
              </div>
              <div className="search-item__location">{item.address.city_name}</div>
            </a>
        );
    }
}

module.exports = SearchItem;
