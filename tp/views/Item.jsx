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
      <div className="item">
        <div className="item__picture">
          <img src="http://mla-s1-p.mlstatic.com/953943-MLA25691799599_062017-O.jpg" alt="Apple Iphone 6 16gb En Caja Dorado Negro Plateado"/>
  </div>
          <div className="item__info">
            <span className="item__condition">
              Nuevo - 79 vendidos
      <i className="item__freeshipment"></i>
            </span>
            <span className="item__title">Apple Iphone 6 16gb En Caja Dorado Negro Plateado</span>
            <span className="item__price">$ 9999.99<sup>00</sup></span>
            <a className="item__buy" href="https://buyingflow.mercadolibre.com.ar/bid/confirm?item_id=MLA671453766&amp;quantity=1">Comprar</a>
          </div>
          <div className="item__description">
            <h2 className="item__description-title">Descripción del producto</h2>
            <div className="item__description-content">
              El Apple iPhone 6 sube la apuesta de Apple con una pantalla de mayor tamaño de 4.7 pulgadas protegida por un cristal ultra resistente, nuevo procesador A8, 16GB, 64GB o 128GB de almacenamiento interno, cámara trasera de 8 megapixels con flash, cámara frontal de 1.2MP, conectividad 4G LTE y iOS 8.GENERAL Red GSM 850 / 900 / 1800 / 1900 - HSDPA 850 / 900 / 1700 / 1900 / 2100 (según modelo) - LTE 1 / 2 / 3 / 4 / 5 / 7 / 8 / 13 / 17 / 18 / 19 / 20 / 25 / 26 / 28 / 29 (según modelo)
    </div>
          </div>
        </div>
        );
  }
}

module.exports = Item;
