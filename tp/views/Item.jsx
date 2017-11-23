const React = require('react');
const Layout = require('./components/Layout');
const formatMoney = require('../middlewares/formatMoney');

class Item extends React.Component {


  render() {
    const { id, pictures, condition, sold_quantity, free_shipping, title, currency_id, price, description } = this.props ;
    return (
      <Layout {...this.props}>
        <div className="item">
          <div className="item__picture">
            <img src={pictures[0].url} alt={title}/>
          </div>
          <div className="item__info">
            <span className="item__condition">
              {condition} - {sold_quantity} vendidos
              { free_shipping && <i className="item__freeshipment"></i>}
            </span>
            <span className="item__title">{title}</span>
            <span className="item__price" dangerouslySetInnerHTML={{__html: formatMoney(price, 'es-AR', currency_id, true)}}></span>
            <a className="item__buy" href={`https://buyingflow.mercadolibre.com.ar/bid/confirm?item_id=${id}&amp;quantity=1`}>Comprar</a>
          </div>
          <div className="item__description">
            <h2 className="item__description-title">Descripción del producto</h2>
            <div className="item__description-content">
              {description}
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

module.exports = Item;
