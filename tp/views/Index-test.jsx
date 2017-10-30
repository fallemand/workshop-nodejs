const React = require('react');
const PropTypes = require('prop-types');
const Layout = require('./Layout-test');

class Index extends React.Component {

  upperCaseTask(task) {
    return task.toString().toUpperCase();
  }

  render() {
   return  (
     <Layout title="titulo">
       <div>
        <h1>{this.props.title}</h1>
         {this.props.showSubtitle && <h2>{this.props.subtitle}</h2>}
         <ul>
           {this.props.tasks.map((task) =>
             <li>{this.upperCaseTask(task)}</li>
           )}
         </ul>
       </div>
     </Layout>
   )
  }
}

Index.defaultProps = {
  title: 'Titulo por defecto',
  subtitle: 'Subtitulo por defecto',
  tasks: [],
  showSubtitle: true
};

Index.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  tasks: PropTypes.array,
  showSubtitle: PropTypes.bool
};

module.exports = Index;
