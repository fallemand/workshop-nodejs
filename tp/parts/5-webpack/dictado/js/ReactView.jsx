const React = require('react');

class ReactView extends React.Component {
	render() {
		return (
			<div>
				<h1>{this.props.data.title}</h1>
				<ul>
					{this.props.data.tasks.map((task, index) => 
						<li key={index}>{task}</li>
					)}
				</ul>
			</div>
		);
	}
}

module.exports = ReactView;