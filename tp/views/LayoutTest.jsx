const React = require('react');
const PropTypes = require('prop-types');

class LayoutTest extends React.Component {
  render() {
    console.log(this.props.showSubtitle);
    return (<html>
    <head>
      <title>{this.props.title}</title>
    </head>
    <body>
    <h1>{this.props.title}</h1>
    {this.props.showSubtitle && <h4>{this.props.subtitle}</h4>}
    {this.props.children}
    </body>
    </html>)
  }
}

LayoutTest.defaultProps = {
  title: 'Titulo Default',
  subtitle: 'Subtitulo default',
  showSubtitle: true
};

LayoutTest.propTypes = {
  title: PropTypes.string,
  showSubtitle: PropTypes.bool,
  subtitle: PropTypes.string
};

module.exports = LayoutTest;
