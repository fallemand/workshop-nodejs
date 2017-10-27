const React = require('react');

class Suggest extends React.Component {
  render() {
    return (
      <div>
        {this.props.results &&
        <ul className="suggest">
          {this.props.results.map((element) =>
            <li key={element} className="suggest__item">
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
