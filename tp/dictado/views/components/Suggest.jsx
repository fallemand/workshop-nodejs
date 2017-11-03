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
    // TODO Search for results -> see fetch: https://developers.google.com/web/updates/2015/03/introduction-to-fetch
    const results = [query];
    this.setState({
      results : results
    });
  }

  render() {
    return (
      <div>
        {this.props.query &&
          <ul className="suggest">
            {this.state.results.map((element) =>
              <li key={element} className="suggest__item">
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
