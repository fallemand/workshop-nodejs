const React = require('react');
const SearchItem = require('./components/SearchItem');
const Layout = require('./components/Layout');

class Search extends React.Component {

  render() {
    return (
      <Layout>
        <SearchItem />
        <SearchItem />
        <SearchItem />
      </Layout>
    );
  }
}

module.exports = Search;
