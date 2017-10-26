const React = require('react');
const Layout = require('./Layout');
const PropTypes = require('prop-types');

class Test extends React.Component {

  render() {
    return (
      <Layout {...this.props}>
        <div className="search-hero">
          {this.props.tasks.map((task) =>
            <div key={task}>{task}</div>
          )}
          <br />
        </div>
      </Layout>
    );
  }
}

Test.propTypes = {
  tasks: PropTypes.array,
  enumProp: PropTypes.oneOf([
    'default',
    'native'
  ]).isRequired,
};

Test.defaultProps = {
  tasks: [],
};

module.exports = Test;
