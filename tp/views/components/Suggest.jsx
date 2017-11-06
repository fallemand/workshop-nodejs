const React = require('react');

class Suggest extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            results: []
        }
    }

    componentWillReceiveProps(nextProps) {
        const q = nextProps.query;
        fetch(`/api/suggest/MLA?q=${q}`)
          .then((response) => {
            response.json().then((response) => {
              this.setState({results: response.suggestions});
            }).catch((err) => {
                console.log(err.toString());
            });
          });
    }

    render() {
        return(
            <ul className="suggest">
            {this.state.results.map((element) => 
                <li className="suggest__item"><a href={`/search?q=${element}`}>{element}</a></li>
            )}
            </ul>
        )
    }
}

module.exports = Suggest;