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
            <Layout query={this.props.query} breadcrumbList={this.props.breadcrumb}>
                <Search {...this.props}></Search>
            </Layout>
        )
    }
}

module.exports = Index;