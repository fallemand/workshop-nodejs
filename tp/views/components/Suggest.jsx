const React = require('react');

class Suggest extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
  }

  componentWillReceiveProps(nextProps) {
    const query = nextProps.query;
    this.setState({
      results: [query]
    });
  }

  render() {
    return (
      <ul className="suggest">
        {this.state.results.map((element, index) =>
          <li key={index} className="suggest__item">{element}</li>
        )}
      </ul>
    );
  }
}

module.exports = Suggest;
