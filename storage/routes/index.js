const express = require('express');
let router = express.Router();
const mongoose = require('mongoose');

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
  return res.render('index', { title: 'Home' });
});

router.post("/addname", (req, res) =>
{
  let myData = new Names(req.body);
  myData.save()
  .then(item =>
    {
      res.redirect(301, '/');
      console.log("Item added to database!");
      console.log("New User db id: ", item._id);
      console.log("All information: ", item);
    })
    .catch(err =>
      {
        console.error("Can't save to database!");
        res.status(400).send("Unable to save to database");
      });
});

router.post('/find', (req, res) =>
{
  let id = req.body.id;

  UserData.findById(id, (err, doc) =>
  {
    if (err)
    {
      console.error('error, no entry found');
    }
    doc.title = req.body.title;
    doc.content = req.body.content;
    doc.author = req.body.author;
    doc.save();
  })
  res.render('return', { firstName: 'id.firstName' });


  // let myData = new Names(req.body);
  // console.log("The request id: ", req.body);
  // myData.find()
  //   .then(item =>
  //     {
  //       return res.render('return', {firstName: "somo", title: 'Search'});
  //     })
  //   .catch(err =>
  //     {
  //       console.error("Can't load info from database!");
  //       res.status(405).send("Unable to load data from database");
  //     });
});

// router.get('/find', (req, res, next) =>
// {
//   Names.find()
//     .then()
//   return res.render('index', { title: 'Index' });
// });

module.exports = router;
