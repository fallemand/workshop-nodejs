const React = require('react');

class Breadcrumb extends React.Component {
    render() {
        const { category, query } = this.props;
       return (
            <ul class="breadcrumb">
                <li class="breadcrumb__element"><a href="/app">Inicio</a></li>
                {category && category.map((category) =>
                    <li class="breadcrumb__element">{category.name}</li>
                )}
                
              {query && <li class="breadcrumb__element">"{query}"</li>}
            </ul>
        ) 
    }
}

module.exports = Breadcrumb;
