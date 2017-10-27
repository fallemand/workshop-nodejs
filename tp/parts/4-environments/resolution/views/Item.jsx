const React = require('react');
const Layout = require('./components/Layout');

class Item extends React.Component {

  itemCondition(condition) {
    return (condition == 'new') ? 'Nuevo' : 'Usado';
  }

  text(description) {
    return (description) ? description : "El item no cuenta con una descripción."
  }

  render() {
    return (
      <Layout {...this.props}>
        <div className="item">
          <div className="item__picture">
            <img src={this.props.picture} alt={this.props.title}/>
          </div>
          <div className="item__info">
                <span className="item__condition">
                    {this.itemCondition(this.props.condition)} - {this.props.sold_quantity} vendidos
                    <i className="item__freeshipment"></i>
                </span>
            <span className="item__title">{this.props.title}</span>
            <span className="item__price">$ {this.props.price.amount}<sup>00</sup></span>
            <a className="item__buy"
               href="https://buyingflow.mercadolibre.com.ar/bid/confirm?item_id={{id}}&quantity=1">Comprar</a>
          </div>
          <div className="item__description">
            <h2 className="item__description-title">Descripción del producto</h2>
            <div className="item__description-content"
                 dangerouslySetInnerHTML={{__html: this.text(this.props.description)}}/>
          </div>
        </div>
      </Layout>
    );
  }
}

module.exports = Item;
