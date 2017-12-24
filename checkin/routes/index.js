let express = require('express');
let router = express.Router();
let User = require('../models/user');
// let mid = require('../middleware');


// GET - Home page
router.get('/', function(req, res, next)
{
  return res.render('index', { title: 'Home' });
});

// GET /create
router.get('/create', function(req, res, next)
{
  return res.render('create', { title: 'Booking Flight' });
});

// GET /checkin
router.get('/checkin', function(req, res, next)
{
  return res.render('checkin', { title: 'Checking-In' });
});

// GET /result
router.get('/result', function(req, res, next)
{
  return res.render('result', { title: 'Result' });
});


module.exports = router;
