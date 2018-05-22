let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// modules
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/storage");
let nameSchema = new mongoose.Schema({
    firstName: String,
    lastName: String
});
let Names = mongoose.model("Names", nameSchema);

// GET /(index)
router.get('/', (req, res, next) =>
{
  return res.render('index', { title: 'Index' });
});

router.post("/addname", (req, res) =>
{
  let myData = new Names(req.body);
  myData.save()
  .then(item =>
    {
      res.redirect(301, '/');
      console.log("Item added to database!");
    })
    .catch(err =>
      {
        console.error("Can't save to database!");
        res.status(400).send("Unable to save to database");
      });
});

module.exports = router;
