const React = require('react');
const Layout = require('./Layout');

class Search extends React.Component {
    render() {
        return(
            <Layout {...this.props}>
            {
                this.props.results.map((item) =>
                    <a className="search-item" href={`/app/items/${item.id}`}>
                        <div className="search-item__picture">
                            <img src={item.thumbnail} alt={item.title}/>
                        </div>
                        <div className="search-item__description">
                            <span className="search-item__price">$ {item.price.amount}</span>
                            <i className="search-item__freeshipment"></i>
                            <p className="search-item__title">{item.title}</p>
                        </div>
                        <div className="search-item__location">{item.address.state_name}</div>
                    </a>
                )
            }
            </Layout>
        );
    }
}

module.exports = Search;