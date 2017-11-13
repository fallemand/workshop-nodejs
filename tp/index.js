const express = require('express');
const app = express();
const router = require('./routers/router');
const expReact = require('express-react-views');
const config = require('./config');

if (config.useMocks) {
    console.log('----Using mocks----');
    require('./mocks');
}

router.init(app, __dirname);

// app.use(bodyParser.urlencoded({extended:true}));
// app.use(bodyParser.json());

app.engine('jsx', expReact.createEngine());
app.set('views', __dirname + '/views/');
app.set('view engine', 'jsx');

app.listen(config.port, config.host, () => {
    console.log(`App started: ${config.host}:${config.port}`);
});
