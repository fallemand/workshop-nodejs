const React = require('react');
const PropTypes = require('prop-types');

class Layout extends React.Component {
  render() {
    const { title, subtitle, showSubtitle, children } = this.props;

    return (
      <html>
        <head>
          <title>{title}</title>
        </head>
        <body />
      </html>
    );
  }
}

Index.defaultProps = {
  title: 'Título por defecto',
  subtitle: 'Subtítulo por defecto',
  showSubtitle: true,
  tasks: [],
};

Index.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  tasks: PropTypes.array,
  showSubtitle: PropTypes.bool,
};

module.exports = Index;
