const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const UserSchema = new mongoose.Schema({
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    name: {
      type: String,
      required: true,
      trim: true
    },
    favoriteLens: {
      type: String,
      required: true,
      trim: true
    },
    password: {
      type: String,
      required: true
    }
});

// hashes password input before storage in DB.
UserSchema.pre('save', function(next)
{
  var user = this; // holds user object and it's data.

  // hash and salt.
  // number = # of times to use encrypt algorithm
  bcrypt.hash(user.password, 9, function(err, hash)
  {
    if (err)
    {
      return next(err);
    }
    user.password = hash; // re-assign hashed password to user.pass for storage in DB.
    next();
  })
});
const User = mongoose.model('User', UserSchema);
module.exports = User;
