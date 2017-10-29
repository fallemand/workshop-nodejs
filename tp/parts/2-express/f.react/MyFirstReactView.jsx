const React = require('react');
const PropTypes = require('prop-types');

class MyFirstReactView extends React.Component {

  render() {
    return (
      <div className="class-css">
        <h1>{this.props.title}</h1>
        {this.props.tasks.map((task) =>
          <div key={task}>{task}</div>
        )}
      </div>
    );
  }
}

MyFirstReactView.propTypes = {
  title: PropTypes.string.isRequired,
  tasks: PropTypes.array,
};

MyFirstReactView.defaultProps = {
  title: 'Titulo por defecto!',
};

module.exports = MyFirstReactView;
