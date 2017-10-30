const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./routers/router');
const expReact = require('express-react-views');

// Configure Body parser 
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//Configure react views
app.engine('jsx', expReact.createEngine());
app.set('views', __dirname + '/views/');
app.set('view engine', 'jsx');

router.init(app, __dirname);

app.listen('3000', 'localhost', () => {
    console.log('app listen in port 3000');
});
