const React = require('react');

class Suggest extends React.Component {

  render() {
    const { category, query } = this.props;
    console.log(this.props)
    return (
      <ul className="suggest">
        <li className="suggest__item">iphone</li>
        <li className="suggest__item">iphone 6</li>
        <li className="suggest__item">iphone 7</li>
        <li className="suggest__item">iphone 5</li>
        <li className="suggest__item">iphone 5s</li>
        <li className="suggest__item">auriculares iphone</li>
        <li className="suggest__item">celulares iphone</li>
      </ul>
    );
  }
}

module.exports = Suggest;
