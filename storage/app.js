const express = require('express'),
  bodyParser = require('body-parser'),
  app = express();

// server on port 8080 or enviroment variable defined when hosting
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json()); // parse incoming requests
app.use(bodyParser.urlencoded({ extended: false }));

// static files link from /public
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'pug'); // engine - pug
app.set('views', __dirname + '/views');

let routes = require('./routes/index'); // include routes
app.use('/', routes);

// catch 404 then forward to error handler
app.use(function(req, res, next)
{
  let err = new Error('404, File Not Found');
  err.status = 404;
  next(err);
});

// last app.use callback
app.use(function(err, req, res, next)
{
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

app.listen(PORT, () => {
 console.log(`App listening on port ${PORT}`);
});
