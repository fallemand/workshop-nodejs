const React = require('react');

class Suggest extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            results: [];
        }
    }

    render() {
        return(
            <ul className="suggest">
            {this.state.results.map((element) => {
                <li>{element}</li>
            })}
            </ul>
        )
    }

}

module.exports = Suggest;