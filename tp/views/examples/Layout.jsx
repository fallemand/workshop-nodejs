const React = require('react');
const PropTypes = require('prop-types');

class LayoutTasks extends React.Component {
  render() {
    const {
      title,
      heading,
      subheading,
      shouldDisplaySubheading,
      children
    } = this.props;

    return (
      <html>
        <head>
          <title>
            {title}
          </title>
        </head>
        <body>

            <h1>
              {heading}
            </h1>

            {
              shouldDisplaySubheading &&
              <h2>
                {subheading}
              </h2>
            }

          {children}
        </body>
      </html>
    );
  }
}

LayoutTasks.defaultProps = {
  heading: 'My tasks',
  subheading: '',
  shouldDisplaySubheading: false
};

LayoutTasks.propTypes = {
  heading: PropTypes.string,
  subheading: PropTypes.string,
  shouldDisplaySubheading: PropTypes.bool
};


module.exports = LayoutTasks;
