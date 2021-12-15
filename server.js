const mongoose = require('mongoose');
const CONSTANTS = require('./consts');
mongoose.connect(CONSTANTS.MONGODB_URL);
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req,
                 res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers",
             "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods",
             "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

const session = require('express-session')
app.use(session({
  secret: 'keyboard cat',
  cookie: {}
}));


require('./providers/provider-controller')(app);
require('./services/post-service')(app);
require('./users/user-controller')(app);

app.listen(process.env.PORT || 4000);
