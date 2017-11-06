const React = require('react');

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.handleSearchKeyUp = this.handleSearchKeyUp.bind(this);
  }

  handleSearchKeyUp(e) {
    console.log(this.refs.search.value);
  }

  render() {
    return (
      <div class="header__container">
        <a class="header__logo" href="/" tabindex="1">MercadoLibre - Donde compras y vendes de todo</a>
        <form class="header__search" action="/app/sites/MLA/search" method="GET" role="search">
          <input onKeyUp={this.handleSearchKeyUp} ref="search" type="text" class="header__search-input" name="q" max-length="120" tabindex="2" autocapitalize="off" autocomplete="off" autocorrect="off" spellcheck="false" placeholder="Nunca dejes de buscar" data-js="search" value={this.props.query}/>
          <button type="submit" class="header__search-btn" data-fastclick="" tabindex="3">
            <i class="header__search-icon"><span>Buscar</span></i>
          </button>
          <div class="header__suggest" data-js="suggest"></div>
        </form>
      </div>
    );
  }
}

module.exports = Header;
