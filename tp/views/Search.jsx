const React = require('react');
const Layout = require('./components/TpLayout');
const SearchItem = require('./components/SearchItem');

class Search extends React.Component {
  render() {
    return (
      <Layout {...this.props}>
          <div>
            {this.props.results.map((item) =>
              <SearchItem item={item}></SearchItem>
            )}
          </div>
      </Layout>
    )
  }
}

module.exports = Search;
