const React = require('react');
const PropTypes = require('prop-types');
const Layout = require('./Layout');

class Index extends React.Component {
  showTasks(tasks) {
    return tasks.map((task) => {
      return <li key={task}>{task}</li>;
    });
  }
  render() {
    return (
      <Layout>
        <div>
          <h1 className="title">{this.props.title}</h1>
          <h2 className="subtitle">{this.props.subtitle}</h2>
          <ul>
            {this.showTasks(this.props.tasks)}
          </ul>
        </div>
      </Layout>
    );
  }
}

Index.defaultProps = {
  title: 'Título por defecto',
  subtitle: 'Subtítulo por defecto',
  showSubtitle: true,
  tasks: [],
};

Index.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  tasks: PropTypes.array,
  showSubtitle: PropTypes.bool,
};

module.exports = Index;
