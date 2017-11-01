const React = require('react');

class SearchItem extends React.Component {

  render() {
    const item = this.props.item;
    return (
      <a className="search-item" href={`/app/items/${item.id}`}>
       <div className="search-item__picture">
          <img src={item.thumbnail} alt="{item.title}"/>
        </div>
        <div className="search-item__description">
          <span className="search-item__price">$ {item.price}</span>
          <i className="search-item__freeshipment"></i>
          <p className="search-item__title">{item.title}</p>
        </div>
        <div className="search-item__location">{item.state_name}</div>
      </a>
    )
  }
}

module.exports = SearchItem;
