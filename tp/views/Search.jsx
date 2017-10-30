const React = require('react');
const PropTypes = require('prop-types');
const Layout = require('./components/Layout');
const SearchItem = require('./components/SearchItem');

class Search extends React.Component {
  render() {
    console.log(this.props);
    const { title, searchResults, query } = this.props;
    return (
      <Layout breadCrumbs={searchResults.categories} query={query}>
        {this.props.searchResults.items.map((item) =>
          <SearchItem item={item} />
        )}
      </Layout>
    );
  }
}

Search.defaultProps = {
  title: 'Default title',
};

Search.propType = {
  title: PropTypes.string,
  searchResults: PropTypes.object,
};

module.exports = Search;
