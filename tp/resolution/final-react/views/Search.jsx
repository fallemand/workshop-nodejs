const React = require('react');
const SearchItem = require('./components/SearchItem');
const Layout = require('./layout');

class Search extends React.Component {
  searchItems(data) {
    let list = [];
    this.props.results.forEach((element) => {
        list.push(<SearchItem key={element.id} id={element.id} thumbnail={element.thumbnail} address={element.address} title={element.title} price={element.price} />);
    })
    return list;
  }
  render() {
    return (
        <Layout {...this.props}>
            {this.searchItems()}
        </Layout>
    );
  }
}

module.exports = Search;
