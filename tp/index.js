const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./routers/router');
const expReact = require('express-react-views');
const config = require('./config');

// Configure Body parser 
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// Use Mocks
if (config.useMocks) {
    console.log('----------------- USING MOCKS -------------------');
    require('./mocks');
} 

//Configure react views
app.engine('jsx', expReact.createEngine());
app.set('views', __dirname + '/views/');
app.set('view engine', 'jsx');

router.init(app, __dirname);

app.listen(config.port, config.host, () => {
    console.log(`app started in port ${config.port}`);
});
