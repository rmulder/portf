const express = require('express');
const router = express.Router();
const User = require('../models/user');

// GET /register
router.get('/register', function(req, res, next) {
  return res.render('register', { title: 'Sign Up' });
});

// POST /register
router.post('/register', function(req, res, next)
{
  if (req.body.email && req.body.name && req.body.favoriteLens &&
    req.body.password &&
    req.body.confirmPassword)
    {
      // checks regular password equals confirmed password
      if (req.body.password !== req.body.confirmPassword)
      {
        var err = new Error("Passwords don't match!");
        err.status = 400;
        return next(err);
      }

      // create object with form input
      var userData =
      {
        email: req.body.email,
        name: req.body.name,
        favoriteLens: req.body.favoriteLens,
        password: req.body.password
      };
      // use schema's "create" method to insert document into Mongo
      User.create(userData, function (error, user)
      {
        if (error)
        {
          return next(error);
        }
        else
        {
          return res.redirect('/profile');
        }
      });
    }
    else
    {
      var err = new Error('All fields required!');
      err.status = 400;
      return next(err);
    }
})

// GET /
router.get('/', function(req, res, next) {
  return res.render('index', { title: 'Home' });
});

// GET /about
router.get('/about', function(req, res, next) {
  return res.render('about', { title: 'About' });

});

// GET /contact
router.get('/contact', function(req, res, next) {
  return res.render('contact', { title: 'Contact' });
});

module.exports = router;
