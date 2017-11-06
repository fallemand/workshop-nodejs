const React = require('react');

class Suggest extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
  }

  componentDidMount() {
    const query = this.props.query;
    this.setState({
      results: [query]
    });
  }

  render() {
    return (
      <ul className="suggest">
        {this.state.results.map((element) =>
          <li className="suggest__item">{element}</li>
        )}
      </ul>
    );
  }
}

module.exports = Suggest;
