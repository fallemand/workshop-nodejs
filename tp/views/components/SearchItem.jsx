const React = require('react');
const PropTypes = require('prop-types');

class SearchItem extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <div>
        <a className="search-item" href={`/app/items/${item.id}`}>
          <div className="search-item__picture">
            <img src={item.picture} alt={item.title} />
          </div>
          <div className="search-item__description">
            <span className="search-item__price">$ {item.price.amount}</span>
            {item.free_shipping && <i className="search-item__freeshipment"></i>}
            <p className="search-item__title">{item.title}</p>
          </div>
          <div className="search-item__location">{item.address.state_name}</div>
        </a>
      </div>
    );
  }
}

SearchItem.defaultProps = {
  title: 'Default title',
};

SearchItem.propType = {
  title: PropTypes.string,
  Searchesults: PropTypes.object,
};

module.exports = SearchItem;
