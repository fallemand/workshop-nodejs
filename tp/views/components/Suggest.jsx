const React = require('react');

class Suggest extends React.Component {
  render() {
    return (
      <ul className="suggest">
        {
          this.state.results.map((el) =>
            <li>
              {el}
            </li>
          )
        }
      </ul>
    );
  }
}

module.exports = Suggest;
