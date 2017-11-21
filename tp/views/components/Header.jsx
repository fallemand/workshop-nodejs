const React = require('react');
const Suggest = require('./Suggest');

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.handleSearchKeyUp = this.handleSearchKeyUp.bind(this);
    this.state = {
      query: this.props.query
    }
  }

  handleSearchKeyUp(e) {
    const query = e.target.value;
    this.setState({
      query: query
    });
  }

  render() {
    return  (
      <div className="header__container">
        <a className="header__logo" href="/app" tabIndex="1">MercadoLibre - Donde compras y vendes de todo</a>
        <form className="header__search" action="/app/search" method="GET" role="search">
          <input type="text" onKeyUp={this.handleSearchKeyUp} className="header__search-input" name="q" max-length="120" tabIndex="2" autoCapitalize="off" autoComplete="off" autoCorrect="off" spellCheck="false" placeholder="Nunca dejes de buscar" data-js="search" ref="search" defaultValue={this.props.query}/>
            <button type="submit" className="header__search-btn" data-fastclick="" tabIndex="3">
              <i className="header__search-icon"><span>Buscar</span></i>
            </button>
          <Suggest query={this.state.query} />
        </form>
      </div>
    );
  }
}

module.exports = Header;
