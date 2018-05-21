const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const app = express();

app.use(helmet());
app.use(compression());

// server on port 8080 or enviroment variable defined when hosting
const PORT = process.env.PORT || 8080;

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/storage");
let nameSchema = new mongoose.Schema({
    firstName: String,
    lastName: String
});
let User = mongoose.model("User", nameSchema);

app.use(bodyParser.json()); // parse incoming requests
app.use(bodyParser.urlencoded({ extended: true }));

// static files link from /public
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'pug'); // engine - pug
app.set('views', __dirname + '/views');

let routes = require('./routes/index'); // include routes
app.use('/', routes);

app.post("/addname", (req, res) => {
    let myData = new User(req.body);
    myData.save()
        .then(item => {
	      res.redirect(301, '/');
	      console.log("added database item!");
        //res.send("Name saved to database");
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });
});

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

app.listen(PORT, () =>
{
 console.log(`http://localhost:${PORT}`);
});
