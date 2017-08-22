let express = require('express');
let router = express.Router();
let User = require('../models/user');
let mid = require('../middleware');

// GET /profile
router.get('/profile', mid.requiresLogin, function(req, res, next)
{
  User.findById(req.session.userId)
      .exec(function (error, user)
      {
        if (error)
        {
          return next(error);
        }
        else
        {
          return res.render('profile', { title: 'Profile', name: user.name, favorite: user.favoriteLens });
        }
      });
});

// GET /logout
router.get('/logout', function(req, res, next)
{
  if(req.session) // if session exists, then delete
  {
    req.session.destroy(function(err)
    {
      if(err) // check for errors
      {
        return next(err);
      }
      else
      {
        console.log("Logging out!");
        return res.redirect('/'); // home view
      }
    });
  }
});

// GET /login
router.get('/login', mid.loggedOut, function(req, res, next)
{
  return res.render('login', { title: 'Log In'});
});

// POST /login
router.post('/login', function(req, res, next)
{
  if (req.body.email && req.body.password)
  {
    User.authenticate(req.body.email, req.body.password, function (error, user)
    {
      if (error || !user)
      {
        console.error("error when authenticating! 401 status");
        let err = new Error('Wrong email AND/OR Password!');
        err.status = 401;
        return next(err);
      }
      else
      {
        console.log("redirect to /profile page");
        req.session.userId = user._id;
        return res.redirect('/profile');
      }
    });
  }
  else
  {
    console.error("User didn't enter username and/or password; 401 status");
    let err = new Error('Email & Password Required!');
    err.status = 401;
    return next(err);
  }
});


// GET /register
router.get('/register', mid.loggedOut, function(req, res, next)
{
  return res.render('register', { title: 'Sign Up' });
});

// POST /register
router.post('/register', function(req, res, next)
{
  if (req.body.email &&
    req.body.name &&
    req.body.favoriteLens &&
    req.body.password &&
    req.body.confirmPassword)
    {
      // confirm that user typed same password twice
      if (req.body.password !== req.body.confirmPassword)
      {
        let err = new Error('Passwords do not match.');
        err.status = 400;
        return next(err);
      }

      // create object with form input
      let userData = {
        email: req.body.email,
        name: req.body.name,
        favoriteLens: req.body.favoriteLens,
        password: req.body.password
      };
      // use schema's `create` method to insert document into Mongo
      User.create(userData, function (error, user)
      {
        if (error)
        {
          return next(error);
        }
        else
        {
          req.session.userId = user._id; // basically auto logins
          return res.redirect('/profile');
        }
      });
    }
    else
    {
      let err = new Error('All fields required.');
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
