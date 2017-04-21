const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

// define the User model schema
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    index: { unique: true }
  },
  password: String,
  name: String
});


var userModel = mongoose.model('userDetail',UserSchema,'users');
var user = {};

user.getAllUser = function(callback){
  userModel.find({},callback);
}
user.findOne = function(user,callback){
  userModel.findOne({eMail:user.eMail,password:user.password},callback);

}
user.addingUser = function(userObject,callback){
   var newUser =new userModel(userObject);
    return newUser.save(callback);
}

// /**
//  * Compare the passed password with the value in the database. A model method.
//  *
//  * @param {string} password
//  * @returns {object} callback
//  */
// UserSchema.methods.comparePassword = function comparePassword(password, callback) {
//   bcrypt.compare(password, this.password, callback);
// };
//
//
// /**
//  * The pre-save hook method.
//  */
// UserSchema.pre('save', function saveHook(next) {
//   const user = this;
//
//   // proceed further only if the password is modified or the user is new
//   if (!user.isModified('password')) return next();
//
//
//   return bcrypt.genSalt((saltError, salt) => {
//     if (saltError) { return next(saltError); }
//
//     return bcrypt.hash(user.password, salt, (hashError, hash) => {
//       if (hashError) { return next(hashError); }
//
//       // replace a password string with hash value
//       user.password = hash;
//
//       return next();
//     });
//   });
// });


module.exports = mongoose.model('User', UserSchema);
