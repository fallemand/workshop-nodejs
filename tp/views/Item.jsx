const React = require('react');
const Layout = require('./components/Layout');
const ItemVip = require('./components/ItemVip');

class Item extends React.Component {
    render() {
        return (
            <Layout {...this.props}>
                <ItemVip item={this.props}/>
            </Layout>
        );
    }
};

module.exports = Item;
