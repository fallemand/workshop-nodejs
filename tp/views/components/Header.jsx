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
      <div class="header__container">
        <a class="header__logo" href="/app" tabindex="1">MercadoLibre - Donde compras y vendes de todo</a>
        <form class="header__search" action="/app/search" method="GET" role="search">
          <input type="text" onKeyUp={this.handleSearchKeyUp} class="header__search-input" name="q" max-length="120" tabindex="2" autocapitalize="off" autocomplete="off" autocorrect="off" spellcheck="false" placeholder="Nunca dejes de buscar" data-js="search" ref="search" value={this.props.query}/>
            <button type="submit" class="header__search-btn" data-fastclick="" tabindex="3">
              <i class="header__search-icon"><span>Buscar</span></i>
            </button>
          <Suggest query={this.state.query} />
        </form>
      </div>
    );
  }
}

module.exports = Header;
