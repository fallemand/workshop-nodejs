const React = require('react');

class ItemVip extends React.Component {
    render() {
        const { item } = this.props;
        return (
            <div class="item">
              <div class="item__picture">
                <img src={item.picture} alt={item.title} />
              </div>
              <div class="item__info">
                <span class="item__condition">
                  {item.condition} - {item.sold_quantity} vendidos
                  {item.free_shipping && <i className="search-item__freeshipment"></i> }
                </span>
                <span class="item__title">{item.title}</span>
                <span class="item__price">$ {item.price.amount}<sup>00</sup></span>
                <a class="item__buy" href={`https://buyingflow.mercadolibre.com.ar/bid/confirm?item_id=${item.id}&amp;quantity=1`}>Comprar</a>
              </div>
              <div class="item__description">
                <h2 class="item__description-title">Descripción del producto</h2>
                <div class="item__description-content"
                  dangerouslySetInnerHTML={{__html: item.description.text}}>
                </div>
              </div>
            </div>
        );
    }
}

module.exports = ItemVip;
