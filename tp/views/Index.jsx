const React = require('react');
const TpLayout = require('./components/TpLayout');
const Search = require('./components/Search');

class Index extends React.Component {
  render() {
    return (<TpLayout {...this.props} ><Search></Search></TpLayout>)
  }
}

module.exports = Index;
