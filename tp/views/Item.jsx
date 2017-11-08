const React = require('react');
const ItemDetail = require('./components/ItemDetail');
const Layout = require('./components/Layout');

class Item extends React.Component {

  itemCondition(condition) {
    return (condition == 'new') ? 'Nuevo' : 'Usado';
  }

  text(description) {
    return (description) ? description : "El item no cuenta con una descripción."
  }

  render() {

    const { category, query, id, title, price, condition, sold_quantity, picture, description } = this.props;
    const item = {
      id : id, 
      title :  title, 
      price: price, 
      condition :  condition, 
      sold_quantity : sold_quantity, 
      picture : picture, 
      description : description
    }

  
    return (
      <Layout breadcrumb={category} query={query}>
        <ItemDetail item={item} />
      </Layout>
    );
  }
}

module.exports = Item;
