const React = require('react');
const Layout = require('./components/Layout');

class Index extends React.Component {
  render() {
    return (
      <Layout></Layout>
      /*<Layout {...this.props}></Layout>*/
    );
  }
}

module.exports = Index;
