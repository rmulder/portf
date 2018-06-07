const path = require('path');
const fs = require('fs');
const express = require('express');
const https = require('https');
const childProc = require('child_process');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const helmet = require('helmet');
const app = express();

app.use(helmet());
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    styleSrc: ["'self'",'ajax.googleapis.com']
  }
}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const port = 8080 || process.env.PORT;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug')

const indexRouter = require('./routes/index');
//const usersRouter = require('./routes/users');

app.use('/', indexRouter);
//app.use('/users', usersRouter);

const certOptions = {
  key: fs.readFileSync(path.resolve('../../../../server.key')),
  cert: fs.readFileSync(path.resolve('../../../../server.crt'))
}

const server = https.createServer(certOptions, app).listen(8080);
childProc.exec(`open -a "Google Chrome" https://localhost:${port}`, () =>
{
 console.log(`Open on: https://localhost:${port}`); 
});

// catch 404 and forward to error handler
app.use((req, res, next) =>
{
  next(createError(404));
});

// error handler
app.use((err, req, res, next) =>
{
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
