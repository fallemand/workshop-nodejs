const React = require('react');

class Search extends React.Component {

    render() {

        const { item } = this.props        

        return (
            <div className="item">
                <div className="item__picture">
                    <img src={item.picture.url} alt={item.title} />
                </div>
                <div className="item__info">
                    <span className="item__condition">{item.condition}
                        <i className="item__freeshipment"></i>
                    </span>
                    <div className="item__title">{item.title}</div>
                    <div className="item__price">{item.price.amount} {item.price.currency}<sup>00</sup></div>
                    <a className="item__buy" href={`https://buyingflow.mercadolibre.com.ar/bid/confirm?item_id=${item.id}&amp;quantity=${item.sold_quantity}`}>Comprar</a>                    
                </div>
                <div className="item__description">
                    <h2 className="item__description-title">Descripción del producto</h2>
                    <div className="item__description-content"
                    dangerouslySetInnerHTML={{__html: item.description.text}}/>
                </div>
            </div>
        );
    }
}

module.exports = Search;
