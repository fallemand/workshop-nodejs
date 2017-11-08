const React = require('react');
const Header = require('./Header');
const Breadcrumb = require('./Breadcrumb');

class TpLayout extends React.Component {
  render() {
    return (<html>
    <head>
      <meta charSet="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
      <meta httpEquiv="cleartype" content="on"/>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
      <meta name="theme-color" content="#fff059"/>
      <title>Mercado Libre | FrontEnd Test</title>
      <link rel="shortcut icon" href="http://ui.mlstatic.com/navigation/1.2.0/mercadolibre/favicon.ico"/>
      <link href="https://fonts.googleapis.com/css?family=Lato:100,300,400" rel="stylesheet" />
      <link href="/assets/dist/styles/main.css" rel="stylesheet" />
    </head>
    <body>
    <header role="banner" data-js="header" className="header">
      <Header query={this.props.query}/>
    </header>
    <main role="main" className="main">
      <Breadcrumb {...this.props}/>
      <div className="main__content">
        {this.props.children}
      </div>
    </main>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.0.0/umd/react.production.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.0.0/umd/react-dom.production.min.js"></script>
    <script src="/assets/dist/scripts/header.bundle.js"></script>
    </body>
    </html>)
  }
}

TpLayout.defaultProps = {
};

TpLayout.propTypes = {
};

module.exports = TpLayout;
