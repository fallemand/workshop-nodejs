var React = require('react');

class SearchItem extends React.Component {
  render() {
    return (
      <a className="search-item" href={`/app/items/${this.props.id}`}>
          <div className="search-item__picture">
              <img src={this.props.thumbnail} alt={this.props.title} />
          </div>
          <div className="search-item__description">
              <span className="search-item__price">$ {this.props.price}</span>
              <i className="search-item__freeshipment"></i>
              <p className="search-item__title">{this.props.title}</p>
          </div>
          <div className="search-item__location">{this.props.address.state_name}</div>
      </a>
    );
  }
}

module.exports = SearchItem;
