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
    return fetch(`/api/suggest?q=${query}`)
      .then((response) => {
          response.json().then(data => {
            this.setState({results: data.suggested_queries});
          });
      });
  }

  render() {
    return (
      <div>
        {this.state.results &&
        <ul className="suggest">
          {this.state.results.map((element, index) =>
            <li key={index} className="suggest__item">
              <a className="suggest__link" href={`/app/search?q=${element.q}`}>{element.q}</a>
            </li>
          )}
        </ul>
        }
      </div>
    )
  }
}

module.exports = Suggest;
