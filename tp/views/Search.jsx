const React = require('react');
const Layout = require('./components/Layout');
const SearchItem = require('./components/SearchItem');


class Search extends React.Component {
  render() {
    return (
      <Layout >
        { this.props.results.map(item => {
          <SearchItem {...item}/>
        })}
      </Layout>
    )
  }
}

module.exports = Search;
