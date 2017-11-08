const React = require('react');
const Layout = require('./components/Layout');

class Item extends React.Component {
  render() {
    const {
      title,
      price,
      condition,
      sold_quantity,
      free_shipping,
      picture,
      description,
      categories,
    } = this.props.item.data;

    return (
      <Layout {...this.props}>
        <div className="item">
          <div className="item__picture">
            <img src={picture} alt={title} />
          </div>
          <div className="item__info">
            <span className="item__condition">
              {(condition === 'new') ? 'Nuevo' : 'Usado'}
              -
              {sold_quantity} vendidos
              {
                free_shipping &&
                <i className="item__freeshipment"></i>
              }
            </span>
            <span className="item__title">
              {title}
            </span>
            <span className="item__price">
              $ {price.amount}
            </span>
            <a className="item__buy" href="#buy">
              Comprar
            </a>
          </div>
          <div className="item__description">
            <h2 className="item__description-title">
              Descripción del producto
            </h2>
            <div className="item__description-content">
              {description}
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

module.exports = Item;
