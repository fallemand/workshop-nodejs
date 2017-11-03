const express = require('express');
const app = express();
const router = require('./routers/router');
const expReact = require('express-react-views');

if(process.env.NODE_ENV !== 'production') {
  console.log('--- Using mocks ---')
  require('./mocks');
}

router.init(app, __dirname);

app.engine('jsx', expReact.createEngine());
app.set('views', __dirname + '/views/');
app.set('view engine', 'jsx');

app.listen('3000', 'localhost', () => {
  console.log("App listen in port 3000");
});

