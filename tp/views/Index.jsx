const React = require('react');
const PropTypes = require('prop-types');
const Layout = require('./Layout'); // Importamos layout para usarlo aca
// Todo lo que metemos dentro de Layout va como children a Layout
// El bind es para que no se pierda el contexto
// Despues hay que pasarle la vista al cliente para que re-renderize la vista
// Puedo crear un helper con utils

class Index extends React.Component {

    // Helper
    camelCaseTask(task) {
        return task.toString().toUpperCase();
    }

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        alert('Click');
    }

    render() {
        // console.log(this.props);
        // El render debe tener un contenedor principal siempre
        // En ECMA script 6 si pongo llaves va return explicito
        // Tambien se pueden pasar todas las propiedades con {...this.props}
        // O tambien const {title, subtitle, showSubtitle} = this.props;
        return (
            <Layout title={this.props.title} subtitle="lala">
                <ul>
                    {this.props.tasks && this.props.tasks.map((task) => <li>{this.camelCaseTask(task)}</li>)}
                </ul>

                <a href="#" onClick={this.handleClick} > Alert </a>
            </Layout>
        )
    }
}

// Valores por defecto
Index.defaultProps = {
    tasks: []
}

// Tipos de los valores
Index.propTypes = {
    tasks: PropTypes.array,
}

module.exports = Index;