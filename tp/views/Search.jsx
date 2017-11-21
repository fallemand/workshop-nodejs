const React = require('react');
const Layout = require('./Layout');
const SearchItem = require('./components/SearchItem');

class Search extends React.Component {

  render () {
    return (
      <Layout {...this.props}>
        {this.props.results.map((item, index) =>
          <SearchItem item={item} key={index}>
          </SearchItem>
        )}
      </Layout>
  );
  }
}

module.exports = Search;
