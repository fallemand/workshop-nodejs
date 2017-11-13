const React = require('react');
const Layout = require('./components/Layout');

class Error extends React.Component {

    render() {
        return (
            <Layout>
                <div class="error">
                  <img class="error__img" src="https://www.mercadolibre.com/org-img/mkt/error/img/herramienta_es.jpg" alt="Destornillador" />
                  <h1 class="error__title">Detalle</h1>
                  <div class="error__detail">{this.props.error}</div>
                </div>
            </Layout>
        );
    }

}

module.exports = Error;
