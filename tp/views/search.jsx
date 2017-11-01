const React = require('react');
const Layout = require('./components/Layout');
const SearchItem = require('./components/SearchItem');

class Search extends React.Component {
  listItems(items) {
    return items.map((item) => {
      return <SearchItem key={item.id} item={item} />;
    });
  }

  render() {
    return <Layout {...this.props}>{this.listItems(this.props.results)}</Layout>;
  }
}

module.exports = Search;
