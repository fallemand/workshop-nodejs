const React = require('react');
const PropTypes = require('prop-types');
const Layout = require('./components/Layout');

class Item extends React.Component {
  render() {
    const { title, itemDetails } = this.props;
    return (
      <Layout title={title} breadCrumbs={itemDetails.categories}>
        <div className="item">
          <div className="item__picture">
            <img src={itemDetails.picture} alt={itemDetails.item.title} />
          </div>
          <div className="item__info">
            <span className="item__condition">
              {itemDetails.condition === 'new' ? 'Nuevo' : 'Usado'} - {itemDetails.sold_quantity} {itemDetails.sold_quantity > 1 ? 'vendidos' : 'vendido'}
              <i className="item__freeshipment"></i>
            </span>
            <span className="item__title">{itemDetails.item.title}</span>
            <span className="item__price">$ {itemDetails.item.price.amount}<sup>{itemDetails.item.price.decimals}</sup></span>
            <a className="item__buy" href={`https://buyingflow.mercadolibre.com.ar/bid/confirm?item_id=${itemDetails.item.id}&amp;quantity=1`}>Comprar</a>
          </div>
          <div className="item__description">
            <h2 className="item__description-title">Descripción del producto</h2>
            <div className="item__description-content">{itemDetails.description.plain_text}</div>
          </div>
        </div>
      </Layout>
    );
  }
}

Item.defaultProps = {
  title: 'Default title',
};

Item.propType = {
  title: PropTypes.string,
  itemDetails: PropTypes.object,
};

module.exports = Item;
