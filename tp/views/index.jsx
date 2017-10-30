const React = require('react');
const PropTypes = require('prop-types');
const Layout = require('./Layout');
const SearchCard = require('./components/SearchCard');

class Index extends React.Component {

  render() {
    return (
      <Layout>
          <SearchCard/>
      </Layout>
    )
  }
}

Index.defaultProps = {
  tasks: []
};

Index.propTypes = {

  tasks: PropTypes.array,
};

module.exports = Index;
