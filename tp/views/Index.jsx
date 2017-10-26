const React = require('react');
const PropTypes = require('prop-types');
const Layout = require('./components/Layout');
const Search = require('./components/Search');

class Index extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout query="Query" breadcrumbList={this.props.breadcrumb}>
                <Search></Search>
            </Layout>
        )
    }
}

module.exports = Index;