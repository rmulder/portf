const path = require('path');
const fs = require('fs');
const express = require('express');
const https = require('https');
const childProc = require('child_process');
const app = express();

const port = 8080 || process.env.PORT;

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
