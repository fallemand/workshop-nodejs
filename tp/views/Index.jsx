const React = require('react');
const PropTypes = require('prop-types');
const Layout = require('./Layout');

// todos los componentes se definien con mayúsculas porque son clases.
class Index extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
                <div>
                    <h1>{this.props.title}</h1>
                    {this.props.showSubtitle && <h2>{this.props.subtitle}</h2>}
                    <ul>
                        {this.props.tasks.map((task) => 
                            <li>{task}</li>
                        )}
                    </ul>
                </div>
            </Layout>
        );
    }
}

Index.defaultProps = {
    title: 'Titulo x defecto',
    subtitle: 'Subtitulo x defecto',
    showSubtitle: true,
    tasks: []
};

// indica el tipo de valor que espera
// proptypes es una dependencia aparte
Index.proptypes = {
    title: PropTypes.string,
    tasks: PropTypes.array,
    showSubtitle: PropTypes.boolean,
    tasks: PropTypes.array
};

module.exports = Index;
