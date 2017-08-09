var React = require('react');

class Breadcrumb extends React.Component {
  quote(query) {
    return (query) ? `<li class="breadcrumb__element">"${query}"</li>` : ''
  }

  getHtml(data) {
    let result = '<li class="breadcrumb__element"><a href="/">Inicio</a></li>';
    if(data.filters && data.filters[0]) {
      data.filters[0].values[0].path_from_root.forEach(element => {
        result += (`<li class="breadcrumb__element">${element.name}</li>`);
      });
    }
    if(data.path_from_root) {
      data.path_from_root.forEach(element => {
        result += (`<li class="breadcrumb__element">${element.name}</li>`);
      });
    }
    result += this.quote(data.query);
    return result;
  }

  render() {
    return (
      <ul className="breadcrumb" dangerouslySetInnerHTML={{__html: this.getHtml(this.props) }} />
    );
  }
}

module.exports = Breadcrumb;
