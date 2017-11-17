const React = require('react');
const PropTypes = require('prop-types');

const Header = require('./Header')
const Breadcrumb = require('./Breadcrumb')

class Layout extends React.Component {
    render() {
        return (
        <html>
        <head>
            <meta charset="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
            <meta http-equiv="cleartype" content="on"/>
            <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
            <meta name="theme-color" content="#fff059"/>
            <title>{this.props.title}</title>
            <link rel="shortcut icon" href="http://ui.mlstatic.com/navigation/1.2.0/mercadolibre/favicon.ico"/>
            <link href="https://fonts.googleapis.com/css?family=Lato:100,300,400" rel="stylesheet"/>
            <link href="/assets/dist/styles/main.css" rel="stylesheet"/>
        </head>
        <body>
        <header role="banner" id="header" class="header">
            <Header />
        </header>
            <main role="main" class="main">
            <Breadcrumb query={this.props.query} category={this.props.category}/>
                <div class="main__content">
                    {this.props.children}
                </div>
            </main>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.0.0/umd/react.production.min.js" />
            <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.0.0/umd/react-dom.production.min.js" />
            <script src="/assets/dist/scripts/header.bundle.js" />
        </body>
        </html>
        );
    }
}

module.exports = Layout;