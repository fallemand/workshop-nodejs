const React = require('react');
const Layout = require('./components/Layout');
const Item = require('./components/Item');

class Search extends React.Component {
  render () {
    const item = this.props;
    return (
      <Layout>
        <Item key={item.id} {...item}></Item>
      </Layout>
    );
  }
}

module.exports = Search;
