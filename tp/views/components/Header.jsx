const React = require('react');
const PropTypes = require('prop-types');

class Header extends React.Component {
  render() {
    const {
      linkText,
      buttonText,
      inputPlaceholderText,
      query,
    } = this.props;

    return (
      <div className="header__container">
          <a className="header__logo" href="/app/" tabIndex="1">
            {linkText}
          </a>
          <form className="header__search" action="/app/search" method="GET" role="search">
              <input type="text" className="header__search-input" name="q" max-length="120"
                tabIndex="2" autoCapitalize="off" autoComplete="off" autoCorrect="off"
                spellCheck="false" placeholder={inputPlaceholderText}
                data-js="search" value={query} />
              <button type="submit" className="header__search-btn" tabIndex="3">
                <i className="header__search-icon">
                  <span>
                    {buttonText}
                  </span>
                </i>
              </button>
          </form>
      </div>
    );
  }
}

Header.defaultProps = {
  linkText: 'Mercado Libre',
  buttonText: 'Buscar',
  inputPlaceholderText: 'Nunca dejes de buscar',
};

Header.propTypes = {
  linkText: PropTypes.string,
  buttonText: PropTypes.string,
  inputPlaceholderText: PropTypes.string,
};

module.exports = Header;
