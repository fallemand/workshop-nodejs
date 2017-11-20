const React = require('react');
const PropTypes = require('prop-types');
const Layout = require('./components/Layout');

class Item extends React.Component {
  getConditionText(condition) {
    return (condition === 'new') ? 'Nuevo' : 'Usado';
  }

  getSoldQuantityText(quantity) {
    return `${quantity} ${(quantity === 1) ? 'vendido' : 'vendidos'}`;
  }

  getPriceText(amount) {
    const price = String(amount).split('.');
    const integer = price[0];
    const decimals = price[1];

    return `$ ${integer}${(decimals) ? `<sup>${decimals}</sup>` : ''}`;
  }

  getDescriptionText(description) {
    return description || 'Publicación sin descripción.';
  }

  render() {
    const {
      buyButtonUrl,
      buyButtonText,
      descriptionHeading,
    } = this.props;

    const {
      title,
      price,
      condition,
      sold_quantity,
      free_shipping,
      picture,
      description,
    } = this.props.data.item;

    return (
      <Layout {...this.props}>
        <div className="item">
          <div className="item__picture">
            <img src={picture} alt={title} />
          </div>
          <div className="item__info">
            <span className="item__condition">
              {this.getConditionText(condition)}
              {' — '}
              {this.getSoldQuantityText(sold_quantity)}
              {
                free_shipping &&
                <i className="item__freeshipment"></i>
              }
            </span>
            <span className="item__title">
              {title}
            </span>
            <span className="item__price"
              dangerouslySetInnerHTML={{ __html: this.getPriceText(price.amount) }} />
            <a className="item__buy" href={buyButtonUrl}>
              {buyButtonText}
            </a>
          </div>
          <div className="item__description">
            <h2 className="item__description-title">
              {descriptionHeading}
            </h2>
            <div className="item__description-content">
              {this.getDescriptionText(description)}
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

Item.defaultProps = {
  buyButtonUrl: '#fakeBuyUrlHash',
  buyButtonText: 'Comprar',
  descriptionHeading: 'Descripción la publicación',
};

Item.propTypes = {
  buyButtonUrl: PropTypes.string,
  buyButtonText: PropTypes.string,
  descriptionHeading: PropTypes.string,
};

module.exports = Item;
