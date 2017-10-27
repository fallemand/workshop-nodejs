const React = require('react');

class Error extends React.Component {
  render() {
    return (
      <div>
        <h1> Error </h1>
        <p>{this.props.error}</p>
      </div>
    );
  }
}

module.exports = Error;
