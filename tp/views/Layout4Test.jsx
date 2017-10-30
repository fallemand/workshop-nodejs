const React = require('react');
const PropTypes = require('prop-types');

class Layout extends React.Component {
  render() {
    return (

    <html>
      <head>
        <title>{this.props.title}</title>
      </head>
      <body>
        {this.props.children}
      </body>
    </html>
    )
  }
}

module.exports = Layout;
