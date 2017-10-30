const React = require('react');
const PropTypes = require('prop-types');
const Layout = require('./Layout');

class Index extends React.Component {
    
    render() {
        return (
            <Layout title="tituloooo">
                 <div>
                    <h1>{this.props.title}</h1>
                    <h2>{this.props.subtilte}</h2>
                </div>
            </Layouy>
        )
    }
}

Index.defaultProps = {
    title: 'Titulo por defecto',
    subtitle: 'Subtitulo por defetcto',
    showTitle: false,
    tasks: []
};

Index.propTypes = {
    title: PropTypes.string,
    tasks: PropTypes.array,
    showTitle: PropTypes.bool,
    tasks: PropTypes.array
}

module.exports = Index;
