const React = require('react');

class Item extends React.Component {

  itemCondition(condition) {
    return (condition == 'new') ? 'Nuevo' : 'Usado';
  }

  text(description) {
    return (description) ? description : "El item no cuenta con una descripción."
  }
  
  render() {
    const { id, picture, title, price, condition, free_shipping, description, sold_quantity } = this.props;

    return (
      <div className="item">
        <div className="item__picture">
          <img src={picture} alt={title}/>
        </div>
        <div className="item__info">
          <span className="item__condition">
            {this.itemCondition(this.props.condition)} - {sold_quantity} vendidos
            {free_shipping && <i className="item__freeshipment"></i>}
          </span>
          <span className="item__title">{title}</span>
          <span className="item__price">$ {price.amount}<sup>00</sup></span>
          <a className="item__buy" href={`https://buyingflow.mercadolibre.com.ar/bid/confirm?item_id=${id}amp;quantity=1`}>Comprar</a>
        </div>
        <div className="item__description">
          <h2 className="item__description-title">Descripción del producto</h2>
          <div className="item__description-content"
                 dangerouslySetInnerHTML={{__html: this.text(this.props.description)}}/>
        </div>
      </div>
    );
  }
}

module.exports = Item;
