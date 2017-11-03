const React = require('react');

class ReactView extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      tasks: this.props.data.tasks
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const task = this.refs.task.value;
    const tasks = this.state.tasks.concat(task);
    this.setState({
      tasks: tasks
    });
  }

  handleClick(e) {
    e.preventDefault();
    alert('bla');
    this.props.data.title = 'Cambio el titulo';
  }

  render() {
    return (
      <div>
        <h1>{this.props.data.title}</h1>
        <ul>
          {this.state.tasks.map((task, index) =>
            <li key={index}>{task}</li>
          )}
        </ul>
        <br />
        <h2>Agregar Tarea</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="task" ref="task" />
          <button type="submit">Agregar!</button>
        </form>
        <a onClick={this.handleClick}>Click</a>
      </div>
    )
  }
}

module.exports = ReactView;
