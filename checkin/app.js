const express = require('express'),
bodyParser = require('body-parser'), 
mongoose = require('mongoose'), 
session = require('express-session'), 
mongodb = require('mongodb'), 
MongoStore = require('connect-mongo')(session), 
app = express();

// const port = process.env.PORT || 8080;
app.set('port', (process.env.PORT || 8080));

// mongodb connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/checkin");
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

// sessions for tracking logins
app.use(session({
  secret: 'aIr PlAnE',
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: db
  })
}));

// ID available in templates
app.use(function (req, res, next) {
  res.locals.currentUser = req.session.userId;
  next();
});

app.use(bodyParser.json()); // parse incoming requests
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/public')); // static files 

app.set('view engine', 'pug'); // pug engine
app.set('views', __dirname + '/views');

const routes = require('./routes/index'); // include routes
app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('File Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500); // error handler function
  res.render('error', {
    message: err.message,
    error: {}
  });
});

// listen on port defined above, either PORT || 8080.
// app.listen(app.get('port'), function() {
//   console.log('Node app is running on port', app.get('port'));
// });

app.get('/', function(request, response) {
    let result = 'App is running'
    response.send(result);
}).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});
