const React = require('react');
const formatMoney = require('../../middlewares/formatMoney');

class SearchItem extends React.Component {
  render () {
    const {id, thumbnail, free_shipping, title, price, location} = this.props;

    return (
      <a className="search-item" href={`/app/items/${id}`}>
        <div className="search-item__picture">
          <img src={thumbnail} alt={title}/>
        </div>
        <div className="search-item__description">
          <span className="search-item__price" dangerouslySetInnerHTML={{__html: formatMoney(price, 'es-AR', 'ARS', true)}}></span>
          { free_shipping && <i className="search-item__freeshipment"></i>}
          <p className="search-item__title">{title}</p>
        </div>
        <div className="search-item__location">{location}</div>
      </a>
    )
  }
}

module.exports = SearchItem;
