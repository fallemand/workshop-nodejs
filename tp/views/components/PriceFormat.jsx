const React = require('react');

class PriceFormat extends React.Component {

  render() {

    let price = this.props.price;
    price = price.toLocaleString('de-DE');
    let priceArray = price.split('.');
    if (!priceArray[1]) 
        priceArray[1] = '00';

    return (
      <strong>
          $ {priceArray[0]}
          <sup>{priceArray[1]}</sup>
      </strong>
    );
  }
}

module.exports = PriceFormat;