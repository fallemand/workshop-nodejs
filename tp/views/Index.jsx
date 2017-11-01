const React = require('react');
const Layout = require('./components/Layout');
const MessageSearch = require('./components/MessageSearch');

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <MessageSearch/>
      </Layout>
    );
  }
}

module.exports = Index;
