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
        return fetch(`/api/suggest/MLA?q=${q}`)
          .then((response) => {
            response.json().then((response) => {
              this.setState({results: response.suggestions});
            }).catch((err) => {
              this.setState({results:[]});
            });
          });
    }

    render() {
        return(
            <ul className="suggest">
            {this.state.results && this.state.results.map((element, index) => 
                <li key={index} className="suggest__item"><a href={`/app/search/MLA?q=${element}`}>{element}</a></li>
            )}
            </ul>
        )
    }
}

module.exports = Suggest;