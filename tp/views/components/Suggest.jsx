const React = require('react');

class Suggest extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
  }

  // componentDidMount() {
  //   const query = this.props.query;
  //   this.setState({
  //     results: [query]
  //   });
  // }

  componentWillReceiveProps(nextProps) {
    const query = nextProps.query;
    return fetch(`/api/suggest?q=${query}`)
      .then((response) => {
        response.json().then((response) => {
          this.setState({results: response.suggested_queries});
        });
      });
  }

  render() {
    return (
      <div>
        {this.state.results.length > 0 &&
          <ul className="suggest">
            {this.state.results.map((element, index) =>
              <li key={index} className="suggest__item">
                <a href={`/app/search?q=${element.q}`}>{element.q}</a>
              </li>
            )}
          </ul>
        }
      </div>
    )
  }
}

module.exports = Suggest;
