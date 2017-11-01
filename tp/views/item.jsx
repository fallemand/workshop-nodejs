const React = require('react');
const Layout = require('./components/Layout');

class Item extends React.Component {
  getCondition() {
    return this.props.condition == 'new' ? 'Nuevo' : 'Usado';
  }

  hasFreeShipping(free_shipping) {
    return free_shipping ? <i className="item__freeshipment" /> : '';
  }

  getCurrencySymbol(price) {
    const { currency } = price;
    let symbol;
    switch (currency) {
      case 'ARS':
        symbol = '$';
        break;
      case 'BRL':
        symbol = 'R$';
        break;
      case 'MXN':
        symbol = '$';
        break;
      case 'EUR':
        symbol = '€';
        break;

      default:
        symbol = '$';
        break;
    }
    return symbol;
  }

  render() {
    const { id, title, price, sold_quantity, free_shipping, picture, description } = this.props;
    return (
      <Layout {...this.props}>
        <div className="item">
          <div className="item__picture">
            <img src={picture} alt={title} />
          </div>
          <div className="item__info">
            <span className="item__condition">
              {`${this.getCondition()} - ${sold_quantity} vendidos`}
              {this.hasFreeShipping(free_shipping)}
            </span>
            <span className="item__title">{title}</span>
            <span className="item__price">
              {this.getCurrencySymbol(price)} {price.amount}
            </span>
            <a
              className="item__buy"
              href={`https://buyingflow.mercadolibre.com.ar/bid/confirm?item_id=${id}&amp;quantity=1`}
            >
              Comprar
            </a>
          </div>
          <div className="item__description">
            <h2 className="item__description-title">Descripción del producto</h2>
            <div className="item__description-content" dangerouslySetInnerHTML={{ __html: description }} ></div>
          </div>
        </div>
      </Layout>
    );
  }
}

module.exports = Item;
