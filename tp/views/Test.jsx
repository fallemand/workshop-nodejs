const React = require('react');
const PropTypes = require('prop-types');
const Layout = require('./LayoutTest');

class Test extends React.Component {
  constructor(props) {
    super(props);
  }

  modify(item) {
    return item.toString().toUpperCase();
  }

  render() {
    // {title, showSubtitle = this.props}
    return (<Layout {...this.props}>
      <div>El contenido es: {this.props.content}</div>
      <ul>
        {this.props.lista && this.props.lista.map((item) => <li>{this.modify(item)}</li>)}
      </ul>
    </Layout>)
  }
}

Test.defaultProps = {
  content: 'Contenido Default'
};

Test.propTypes = {
  content: PropTypes.string,
  lista: PropTypes.array
};

module.exports = Test;
