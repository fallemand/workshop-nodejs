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
    return fetch(`/api/suggest?q=${query}`)
      .then((response) => {
        response.json().then((response) => {
          this.setState({ results: response.results });
        });
      });
  }

  render() {
    const { category, query } = this.props;

    return (
      <div>
        {this.state.results.length > 0 &&
          <ul class="suggest">
            {this.state.results.map((element, index) =>
              <li key={index} className="suggest__item">
                <a href={`/app/search?q=${element}`}>{element}</a>
              </li>
            )}
          </ul>

        }
      </div>
    );
  }
}

module.exports = Suggest;
