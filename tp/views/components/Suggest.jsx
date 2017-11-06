const React = require('react');

class Suggest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    }
  }

  componentDidMount() {
    this.setState({
      results: ['iphone', 'iphone7']
    })
  }

  render() {
    return (
      <ul className='suggest'>
        {this.state.results.map(item => <li className='suggest__item'>{item.q}</li>)}
      </ul>
    )
  }
}

module.exports = Suggest;
