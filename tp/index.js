const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./routers/router');
const expReact= require('express-react-views')
const config = require('./config');

//Configure react views
app.engine('jsx', expReact.createEngine());
app.set('views', __dirname + '/views/');
app.set('view engine', 'jsx');


// Configure Body for post calls
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//mocks
if(process.env.NODE_ENV != 'production'){
  console.log("---- Using Mocks ------")
  require('./mocks')
}

// Define Routes
router.init(app, __dirname);

app.listen(config.port, config.address, () => {
  console.log(`app listen ${config.host} in port ${config.port}`);
});


