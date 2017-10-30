const React = require('react');
const PropTypes = require('prop-types');

class Layout extends React.Component {
    render() {
        <html>
        <head>
        </head>
        <body>
            <h1>{this.props.title}</h1>
        </body>
        </html>
    }
}

module.exports = Layout;