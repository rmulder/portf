const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require("mongoose");
const app = express();

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
    var myData = new User(req.body);
    myData.save()
        .then(item => {
            res.send("Name saved to database");
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });
});

app.listen(PORT, () => {
 console.log(`App listening on port ${PORT}`);
});
