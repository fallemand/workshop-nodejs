const React = require('react');
const Layout = require('./Layout');

class Item extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
                <div className="item">
                    <div className="item__picture">
                        <img src="http://mla-s1-p.mlstatic.com/953943-MLA25691799599_062017-O.jpg" alt={this.props.title} />
                    </div>
                    <div className="item__info">
                        <span className="item__condition">
                            Nuevo - {this.props.sold_quantity} vendidos
                            <i className="item__freeshipment"></i>
                        </span>
                        <span className="item__title">{this.props.title}</span>
                        <span className="item__price">$ {this.props.price}<sup>00</sup></span>
                        <a className="item__buy" href="https://buyingflow.mercadolibre.com.ar/bid/confirm?item_id=MLA671453766amp;quantity=1">Comprar</a>
                    </div>
                    <div className="item__description">
                        <h2 className="item__description-title">Descripción del producto</h2>
                        <div className="item__description-content">
                            ...
                        </div>
                    </div>
                </div>
            </Layout>
            )
        }
}

module.exports = Item;