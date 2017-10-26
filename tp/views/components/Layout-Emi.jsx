const React = require('React');
const PropTypes = require('prop-types');

class LayoutEmi extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <title>{this.props.title}</title>
                </head>
                <body>
                    <h1>{this.props.title}</h1>
                    {this.props.showSubtitle && <h4>{this.props.subtitle}</h4>}
                    {this.props.children}
                </body>
            </html>
        )
    }
}

// Valores por defecto
LayoutEmi.defaultProps = {
    title: 'Titulo por defecto',
    subtitle: 'Subtitulo por defecto',
    showSubtitle: true,
    showTitle : true
}

// Tipos de los valores
LayoutEmi.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    showTitle: PropTypes.bool,
    showSubtitle: PropTypes.bool
}

module.exports = LayoutEmi;