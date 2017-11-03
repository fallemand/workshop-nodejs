const React = require('react');

class ReactView extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			tasks: props.data.tasks
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
	    e.preventDefault();
	    const task = this.refs.task.value;
	    const tasks = this.state.tasks.concat(task);
	    this.setState({
	    	tasks: tasks
	    });
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
				<form role="form" onSubmit={this.handleSubmit}>
					<input ref="task" type="text" />
					<button type="submit">Guardar</button>
				</form>
			</div>
		);
	}
}

module.exports = ReactView;