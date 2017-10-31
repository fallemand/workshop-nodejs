const React = require('react');
const Layout = require('./components/Layout');
const SearchItem = require('./components/SearchItem');

class Search extends React.Component {

  render() {
    return (
      <Layout {...this.props}>
        {this.props.results.map((item) =>
          <SearchItem key={item.id} {...item} />
        )}
      </Layout>
    )
  }
}

module.exports = Search;
