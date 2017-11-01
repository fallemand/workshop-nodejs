const React = require('react');

class Item extends React.Component {
  render() {
    const { id, thumbnail, title, free_shipping, address, price } = this.props;
    return (
      <div className="item">
        <div className="item__picture">
          <img src="http://mla-s1-p.mlstatic.com/953943-MLA25691799599_062017-O.jpg" alt={title}/>
        </div>
        <div className="item__info">
          <span className="item__condition">
            Nuevo - 79 vendidos
            <i className="item__freeshipment"></i>
          </span>
          <span className="item__title">{title}</span>
          <span className="item__price">$ {price}<sup>00</sup></span>
          <a className="item__buy" href="https://buyingflow.mercadolibre.com.ar/bid/confirm?item_id=MLA671453766amp;quantity=1">Comprar</a>
        </div>
        <div className="item__description">
          <h2 className="item__description-title">Descripción del producto</h2>
          <div className="item__description-content">
            El Apple iPhone 6 sube...
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Item;
