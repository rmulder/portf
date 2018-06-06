const path = require('path');
const fs = require('fs');
const express = require('express');
const https = require('https');
const childProc = require('child_process');
const app = express();

const port = 8080 || process.env.PORT;

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const certOptions = {
  key: fs.readFileSync(path.resolve('../../../../server.key')),
  cert: fs.readFileSync(path.resolve('../../../../server.crt'))
}

app.get('*', (req, res, next) =>
{
 res.send("Hello, HTTPS World");
});

const server = https.createServer(certOptions, app).listen(8080);
childProc.exec(`open -a "Google Chrome" https://localhost:${port}`, () =>
{
 console.log(`On: https://localhost:${port}`); 
});
