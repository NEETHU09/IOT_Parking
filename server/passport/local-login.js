const jwt = require('jsonwebtoken');
const User = require('mongoose').model('User');
const PassportLocalStrategy = require('passport-local').Strategy;
const config = require('../../config');


/**
 * Return the Passport Local Strategy object.
 */
module.exports = new PassportLocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, email, password, done) => {
  const userData = {
    email: email.trim(),
    password: password.trim()
  };

  // find a user by email address
  return User.findOne({ email: userData.email, password: userData.password}, (err, user) => {
    if (err) { return done(err); }
    console.log("hjhjh"+user);
    if (!user) {
      const error = new Error('Incorrect email or password');
      error.name = 'IncorrectCredentialsError';

      return done(error);
    }
    else{
      const payload = {
        sub: user._id
      };

      // create a token string
      const token = jwt.sign(payload, config.jwtSecret);
      const data = {
        name: user.name
      };
      console.log("**********");
      console.log(data);
      return done(null, token, data);
    }

    // // check if a hashed user's password is equal to a value saved in the database
    // return user.comparePassword(userData.password, (passwordErr, isMatch) => {
    //   if (err) { return done(err); }
    //
    //   if (!isMatch) {
    //     const error = new Error('Incorrect email or password');
    //     error.name = 'IncorrectCredentialsError';
    //
    //     return done(error);
    //   }
    //
      // const payload = {
      //   sub: user._id
      // };
      //
      // // create a token string
      // const token = jwt.sign(payload, config.jwtSecret);
      // const data = {
      //   name: user.name
      // };
    //
    //   return done(null, token, data);
    // });
  });
});
