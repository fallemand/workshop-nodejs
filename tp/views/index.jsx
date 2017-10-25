const React = require('react');
const PropTypes = require('prop-types');
const Layout = require('./Layout')

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    alert('alert');
  }

  render() {
    return (
      <Layout {...this.props}>
        <ul>
          {this.props.tasks.map((task) => <li>{task}</li>)}
        </ul>
        <a href="#" onClick={this.handleClick()}>algo</a>
      </Layout>
    )
  }
}

Index.defaultProps = {
  tasks: []
};

Index.propTypes = {

  tasks: PropTypes.array,
};

module.exports = Index;
