const React = require('react');
const PropTypes = require('prop-types');

class Layout extends React.Component {

  render() {
    const { title, subtitle, showSubtitle, children } = this.props;

    return (
      <html>
          <head>
            <title>{this.props.title}</title>
          </head>
          <body>
            <h1>{this.props.title}</h1>
            {this.props.showSubtitle && <h2>{this.props.subtitle}</h2>}
            {this.props.children}
          </body>
      </html>
    )
  }
}

Index.defaultProps = {
  title: "Título por defecto",
  subtitle: "Subtítulo por defecto",
  showSubtitle: true
};

Index.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  showSubtitle: PropTypes.bool
};
