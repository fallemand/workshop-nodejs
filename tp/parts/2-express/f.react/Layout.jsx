const React = require('react');
const PropTypes = require('prop-types');

class Layout extends React.Component {
  render() {
    const { title, subtitle, children } = this.props;
    return (
      <html>
        <head>
          <title>{title}</title>
        </head>
        <body>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
          {children}
        </body>
      </html>
    );
  }
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  showSubtitle: PropTypes.bool,
};

Layout.defaultProps = {
  title: 'Titulo por defecto!',
  subtitle: 'Subtitulo por defecto!'
};

module.exports = Layout;
