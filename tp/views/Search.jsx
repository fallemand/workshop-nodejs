const React = require('react');
const SearchItem = require('./components/SearchItem');
const Layout = require('./components/Layout');

class Search extends React.Component {

  render() {

    return (
      <Layout breadcrumb = {this.props.category} query={this.props.query}>
        {this.props.results.map((item, index) =>          
          <SearchItem key={index} item={item}/>
        )}
      </Layout>
    );
  }
}

module.exports = Search;
