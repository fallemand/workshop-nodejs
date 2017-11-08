const React = require('react');

class Suggest extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      results: []
    }
  }

  componentWillReceiveProps(nextProps) {
    const query = nextProps.query;
    fetch(`/api/suggest?q=${query}`)
      .then((response) => {
        response.json().then((res) => {
          this.setState({ results: res.results });
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
                <a href={`/app/search?q=${element}`}>{element}</a>
              </li>
            )}
          </ul>
        }
      </div>
    )
  }
}

module.exports = Suggest;
