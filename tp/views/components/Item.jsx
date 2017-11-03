const React = require('react');

class Item extends React.Component {
  render() {
    const { id, thumbnail, title, price, condition, free_shipping } = this.props.item;
    const { plain_text } = this.props.description;
    const { sold_quantity } = this.props.category;

    return (
      <div className="item">
        <div className="item__picture">
          <img src={thumbnail} alt={title}/>
        </div>
        <div className="item__info">
          <span className="item__condition">
            {condition} - {sold_quantity} vendidos
            {free_shipping && <i className="item__freeshipment"></i>}
          </span>
          <span className="item__title">{title}</span>
          <span className="item__price">$ {price}<sup>00</sup></span>
          <a className="item__buy" href={`https://buyingflow.mercadolibre.com.ar/bid/confirm?item_id=${id}amp;quantity=1`}>Comprar</a>
        </div>
        <div className="item__description">
          <h2 className="item__description-title">Descripción del producto</h2>
          <div className="item__description-content">{plain_text}</div>
        </div>
      </div>
    );
  }
}

module.exports = Item;
