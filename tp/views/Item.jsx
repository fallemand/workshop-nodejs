const React = require('react');
const Layout = require('./components/Layout');

class Item extends React.Component {
  render() {
    // const {
    //   results,
    // } = this.props;

    return (
      <Layout {...this.props}>
        ITEM
      </Layout>
    );
  }
}

module.exports = Item;
