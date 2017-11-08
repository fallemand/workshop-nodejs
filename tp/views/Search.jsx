const React = require('react');
const Layout = require('./components/Layout');
const SearchItem = require('./components/SearchItem');

class Search extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout query={this.props.query} breadcrumbList={this.props.categories}>
                <div>
                    <h1> Resultados </h1>
                    <div>
                        {this.props.results && this.props.results.map((item, index) => 
                            <SearchItem key={index} item={item}></SearchItem>
                        )}
                    </div>
                </div>
            </Layout>
        )
    }
}

module.exports = Search;