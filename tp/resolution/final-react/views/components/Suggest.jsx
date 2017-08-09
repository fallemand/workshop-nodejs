var React = require('react');

class Suggest extends React.Component {
  render() {
    const suggestList = this.props.suggested_queries.map(function(element){
                          return `<li class="suggest__item">${element.q}</li>`
                        }).join('');
    return (
      <ul className="suggest" dangerouslySetInnerHTML={{__html: suggestList }} />
    );
  }
}

module.exports = Suggest;
