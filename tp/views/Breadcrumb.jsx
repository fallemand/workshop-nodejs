const React = require('react');

class Breadcrumb extends React.Component {
    render() {
        return (
            <ul class="breadcrumb">
                <li class="breadcrumb__element"><a href="/">Inicio</a></li>
                <li class="breadcrumb__element">Celulares y Teléfonos</li>
                <li class="breadcrumb__element">Celulares y Smartphones</li>
                <li class="breadcrumb__element">iPhone</li>
                <li class="breadcrumb__element">"iphone 6"</li>
            </ul>
        );
    }
}

module.exports = Breadcrumb;