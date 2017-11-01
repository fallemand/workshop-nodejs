const React = require('react');
const Layout = require('./components/Layout');

class Item extends React.Component {
    render() {
        const item = this.props;
        const preStyle = {
        whiteSpace: "pre-wrap"
    };
    return (
        <Layout q="" breadcrumbList={this.props.category.path_from_root}>
            <div className="item">
                <div className="item__picture">
                    <img src={item.pictures[0].secure_url} alt={item.title}/>
                </div>
                <div className="item__info">
                    <span className="item__condition">
                    {item.condition === 'new' ? 'Nuevo' : 'Usado'} - {item.sold_quantity} vendidos
                    <i className="item__freeshipment"></i>
                    </span>
                    <span className="item__title">{item.title}</span>
                    <span className="item__price">${item.price}<sup>00</sup></span>
                    <a className="item__buy" href={`https://buyingflow.mercadolibre.com.ar/bid/confirm?item_id=${item.id}&quantity=1`}>Comprar</a>
                </div>
                <div className="item__description">
                    <h2 className="item__description-title">Descripción del producto</h2>
                    <div className="item__description-content">
                        {item.description.text && <div dangerouslySetInnerHTML={{ __html: item.description.text }}></div> }
                        <pre style={preStyle}>{item.description.plain_text && item.description.plain_text}</pre>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
}

module.exports = Item;