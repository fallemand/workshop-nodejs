const React = require('react');
const Layout = require('./components/Layout');
const PropTypes = require('prop-types');

class Test extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    alert('click');
    e.preventDefault();
  }

  render() {
    return (
      <Layout>
        <div className="search-hero">
          <h1>{this.props.title}</h1>
          {this.props.tasks.map((task) =>
            <div key={task}>{task}</div>
          )}
          <br />
          <a href="#test" onClick={this.handleClick} > Link ejemplo </a>
        </div>
      </Layout>
    );
  }
}

Test.propTypes = {
  tasks: PropTypes.array,
  title: PropTypes.string.isRequired,
  showTitle: PropTypes.bool,
  enumProp: PropTypes.oneOf([
    'default',
    'native'
  ]).isRequired,
};

Test.defaultProps = {
  tasks: [],
  title: 'Titulow!'
};

module.exports = Test;
