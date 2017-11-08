const React = require('react');

class Header extends React.Component {
  render() {
    return (
      <div className="header__container">
          <a className="header__logo" href="/app/" tabIndex="1">
            MercadoLibre - Donde compras y vendes de todo
          </a>
          <form className="header__search" action="/app/search" method="GET" role="search">
              <input type="text" className="header__search-input" name="q" max-length="120"
                tabIndex="2" autoCapitalize="off" autoComplete="off" autoCorrect="off"
                spellCheck="false" placeholder="Nunca dejes de buscar"
                data-js="search" value="" />
              <button type="submit" className="header__search-btn" tabIndex="3">
                <i className="header__search-icon">
                  <span>Buscar</span>
                </i>
              </button>
              <div className="header__suggest" data-js="suggest"></div>
          </form>
      </div>
    );
  }
}

module.exports = Header;
