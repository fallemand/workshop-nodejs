const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./routers/router');
const expReact= require('express-react-views')

//Configure react views
app.engine('jsx', expReact.createEngine());
app.set('views', __dirname + '/views/');
app.set('view engine', 'jsx');


// Configure Body for post calls
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Define Routes
router.init(app, __dirname);

//mocks
if(process.env.NODE_ENV != 'production'){
  console.log("---- Using Mocks ------")
  require('./mocks')
}


//Start Application
global.port = 3000;
global.address = '0.0.0.0';

app.listen(global.port, global.address, () => {
  console.log('app listen in port 3000');
});
