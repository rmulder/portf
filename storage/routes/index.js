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
  console.log("IP Address of Request: ", req.connection.remoteAddress);
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

router.get('/find', (req, res, next) =>
{
  return res.render('find', { title: 'Find' });
});


// doesnt look in db. fix!!!
router.post('/findname', (req, res) =>
{
  let myDataFind = new Names(req.body);

  console.log("Id of user: ", myDataFind.id);

  Names.findById(myDataFind.id, (err, doc) =>
  {
    if(err)
    {
      console.error('Some error occured!');
    }
    res.render('return', { firstName: myDataFind.firstName, lastName: myDataFind.lastName});
  })
  // res.render('return', { firstName: myDataFind.firstName, lastName: myDataFind.lastName});
});


module.exports = router;
