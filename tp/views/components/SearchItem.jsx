const React = require('react');

class SearchItem extends React.Component {
  render() {
    return (
      <a className="search-item" href="/app/items/MLA672160044">
        <div className="search-item__picture">
          <img src="http://mla-s1-p.mlstatic.com/736895-MLA25705832447_062017-I.jpg" alt="Celular Libre Apple Iphone 6 Gris 32gb" />
        </div>
        <div className="search-item__description">
          <span className="search-item__price">$ 14999</span>
          <i className="search-item__freeshipment"></i>
          <p className="search-item__title">Celular Libre Apple Iphone 6 Gris 32gb</p>
        </div>
        <div className="search-item__location">Capital Federal</div>
      </a>
    );
  }
}

module.exports = SearchItem;
