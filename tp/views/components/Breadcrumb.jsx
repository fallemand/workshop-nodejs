const React = require('react');

class Breadcrumb extends React.Component {
    render() {
        const { category, query } = this.props;
       return (
            <ul class="breadcrumb">
                <li class="breadcrumb__element"><a href="/">Inicio</a></li>
                {category && category.map((category) =>
                    <li class="breadcrumb__element"><a href="/">{category.name}</a></li>
                )}
                
              {query && <li class="breadcrumb__element">"{query}"</li>}
            </ul>
        ) 
    }
}

module.exports = Breadcrumb;
