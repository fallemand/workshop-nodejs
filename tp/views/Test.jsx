// React decide llamar a sus vistas, con la extención jsx

const React = require('react');
const PropTypes = require('prop-types');
const Layout = require('./Layout4Test');

class Index extends React.Component {
  render() {
    //Siempre disponible en React.Component, será el responsable de renderizar la vista
    //Aqui escribo JS
    return (
      //Aqui escribo HTML, si necesito JS, va entre {}
     <Layout title={this.props.title}>
       <div>
         <h1>{this.props.title}</h1>
         <span>{this.props.anotherData}</span>
         {this.props.showSubtitle && <h2>{this.props.subtitle}</h2>}
         <ul>
           {this.props.tasks.map((task) =>
             <li>{task}</li>
           )}
         </ul>
       </div>
     </Layout>
    )}
}

/*No es obligatorio tenerlo, solo es una manera de preveer*/

//Si no viene una prop, puedo definirla aqui
Index.defaultProps = {
  title: 'Titulo por defecto',
  subtitle: 'Subtitulo por defecto',
  anotherData: 'By default',
  showSubtitle: true,
  tasks: []
};

//A cada prop le puedo decir de que tipo es, al estar definida, se encarga de verificar que tenga el dato que defini.
Index.propTypes = {
  title:PropTypes.string,
  showSubtitle: PropTypes.bool,
  tasks: PropTypes.array
};

module.exports = Index;
