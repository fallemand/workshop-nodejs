const React = require('react');
const PropTypes = require('prop-types');

class Header extends React.Component {

  render() {
    return  (
      <div class="header__container">
        <a class="header__logo" href="/" tabindex="1">MercadoLibre - Donde compras y vendes de todo</a>
        <form class="header__search" action="/app/search" method="GET" role="search">
          <input type="text" class="header__search-input" name="q" max-length="120" tabindex="2" autocapitalize="off" autocomplete="off" autocorrect="off" spellcheck="false" placeholder="Nunca dejes de buscar" data-js="search"/>
            <button type="submit" class="header__search-btn" data-fastclick="" tabindex="3">
              <i class="header__search-icon"><span>Buscar</span></i>
            </button>
            <div class="header__suggest" data-js="suggest"></div>
        </form>
      </div>
    )
  }
}

module.exports = Header;
