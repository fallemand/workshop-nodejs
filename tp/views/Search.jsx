const React = require('react');
const Layout = require('./components/Layout');
const SearchItem = require('./components/SearchItem');

class Search extends React.Component {
  render() {
    const {
      results,
    } = this.props.data;

    return (
      <Layout {...this.props}>
        {
          results.map((result) =>
            <SearchItem {...result} />
          )
        }
      </Layout>
    );
  }
}

module.exports = Search;
