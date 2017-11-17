const React = require('react');

class ItemVip extends React.Component {
    render() {
        const { item } = this.props;
        return (
            <div className="item">
              <div className="item__picture">
                <img src={item.picture} alt={item.title} />
              </div>
              <div className="item__info">
                <span className="item__condition">
                  {item.condition} - {item.sold_quantity} vendidos
                  {item.free_shipping && <i className="search-item__freeshipment"></i> }
                </span>
                <span className="item__title">{item.title}</span>
                <span className="item__price">$ {item.price.amount}</span>
                <a className="item__buy" href={`https://buyingflow.mercadolibre.com.ar/bid/confirm?item_id=${item.id}&amp;quantity=1`}>Comprar</a>
              </div>
              <div className="item__description">
                <h2 className="item__description-title">Descripción del producto</h2>
                <div className="item__description-content"
                  dangerouslySetInnerHTML={{__html: item.description.text}}>
                </div>
              </div>
            </div>
        );
    }
}

module.exports = ItemVip;
