"use strict";

// if logged in, then redirect
function loggedOut(req, res, next)
{
  if(req.session && req.session.userId)
  {
    return res.redirect('/profile');
  }
  return next();
}

// need to login to view page.
function requiresLogin(req, res, next)
{
  if(req.session && req.session.userId)
  {
    return next();
  }
  else
  {
    let err = new Error('Need to login to view!');
    err.status = 401;
    return next(err);
  }
}
module.exports.loggedOut = loggedOut;
module.exports.requiresLogin = requiresLogin;
