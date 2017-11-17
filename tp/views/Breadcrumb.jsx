const React = require('react');

class Breadcrumb extends React.Component {

render() {
    const {category, query} = this.props;
        return (
            <ul className="breadcrumb">
            <li className="breadcrumb__element"><a href="/app">Inicio</a></li>
                {category && category.map((element) =>
                    <li key={element.id} className="breadcrumb__element">{element.name}</li>
                )}
                {query && <li className="breadcrumb__element">"{query}"</li>}
            </ul>
        );
    }
}

module.exports = Breadcrumb;
