const express = require('express');
const app = express();
const router = require('./routers/router');
const expReact = require('express-react-views');

app.engine('jsx',  expReact.createEngine());
app.set('views', __dirname + '/views/');
app.set('view engine', 'jsx');

//Use mocks
if (process.env.NODE_ENV !== 'production') {
  console.log('------ USING MOCKS -------');
  require('./mocks');
}


router.init(app, __dirname);

app.listen('3000', 'localhost', () => {
  console.log("app listening in port 3000");
});

