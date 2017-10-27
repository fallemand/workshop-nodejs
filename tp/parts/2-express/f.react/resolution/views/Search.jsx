const React = require('react');
const SearchItem = require('./components/SearchItem');
const Layout = require('./components/Layout');

class Search extends React.Component {

  render() {
    return (
      <Layout {...this.props}>
        {this.props.results.map((item) =>
          <SearchItem {...item} key={item.id} />
        )}
      </Layout>
    );
  }
}

module.exports = Search;
