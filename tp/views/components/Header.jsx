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
    //console.log(this.refs.search.value);
    console.log(e.target.value);
    this.setState({
      query: e.target.value
    })
  }

  render() {
    return (
      <div class="header__container">
           <a class="header__logo" href="/" tabIndex="1">MercadoLibre - Donde compras y vendes de todo</a>
           <form class="header__search" action="/app/search/MLA" method="GET" role="search">
               <input type="text" onKeyUp={this.handleSearchKeyUp} className="header__search-input"
               name="q" maxLength="120" tabIndex="2" autoCapitalize="off"
               autoComplete="off" autoCorrect="off" spellCheck="false"
               placeholder="Nunca dejes de buscar" data-js="search"
               value={this.props.query} ref="search"/>
               <button type="submit" className="header__search-btn" data-fastclick="" tabIndex="3">
               <i className="header__search-icon"><span>Buscar</span></i>
               </button>
               <div className="header__suggest" data-js="suggest"></div>
            <Suggest query={this.state.query}/>
           </form>
       </div>
    );
  }
}

module.exports = Header;
