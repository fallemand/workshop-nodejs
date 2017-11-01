const React = require('react');
const Layout = require('./Layout');

class Item extends React.Component {

  currencySymbol(currency) {
    let symbol = '';
    switch(currency) {
      default: symbol = '$'
    }
    return symbol;
  }

  render() {
    return (
      <Layout {...this.props}>
      <div className="item">
          <div className="item__picture">
            <img src={this.props.pictures[0].url} alt={this.props.title}/>
          </div>
        <div className="item__info">
        <span className="item__condition">
          {this.props.condition} - {this.props.sold_quantity} vendidos
          {this.props.free_shipping && <i className="item__freeshipment"></i>}
        </span>
          <span className="item__title">{this.props.title}</span>
          <span className="item__price">{this.currencySymbol(this.props.currency_id)} {this.props.price}</span>
          <a className="item__buy" href="https://buyingflow.mercadolibre.com.ar/bid/confirm?item_id=MLA671453766amp;quantity=1">Comprar</a>
        </div>
        <div className="item__description">
          <h2 className="item__description-title">Descripción del producto</h2>
          {this.props.description.plain_text && <div className="item__description-content">
            {this.props.description.plain_text}
          </div>}
          <div className="item__description-content" dangerouslySetInnerHTML={{ __html: this.props.description.text }} />
        </div>
      </div>
      </Layout>

  );
  }

}

module.exports = Item;
