const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const bodyParser = require('body-parser');
const childProc = require('child_process');
const mongoose = require("mongoose");
const app = express();

app.use(helmet());
app.use(compression());

// port 8080 or enviroment variable defined when hosting
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json()); // parse incoming requests
app.use(bodyParser.urlencoded({ extended: true }));

// static files
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

let routes = require('./routes/index'); // routes defined
app.use('/', routes);

// 404 error catcher
app.use(function(req, res, next)
{
  let err = new Error('404, File Not Found');
  err.status = 404;
  next(err);
});

// last callback
app.use(function(err, req, res, next)
{
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

app.listen(PORT, () =>
{
 console.log(`http://localhost:${PORT}`);
});

childProc.exec(`open -a "Google Chrome" http://localhost:${PORT}`, () =>
{
 console.log(`Open on: http://localhost:${PORT}`);

});
