const React = require('react');
const Layout = require('./components/Layout');
const SearchItem = require('./components/SearchItem');

class Search extends React.Component {
  render () {
    return (
      <Layout>
        <div>
          <h1>Resultados</h1>
          <div>{this.props.results.map((item) => <SearchItem key={item.id} {...item} />)}</div>
        </div>
      </Layout>
    );
  }
}

module.exports = Search;
