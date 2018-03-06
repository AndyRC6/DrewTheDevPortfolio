var mongoose = require("mongoose");
var bcrypt = require("bcrypt");

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    username: {
        type: String,
        unique:true,
        trim:true
    },
    password: {
        type: String,
        required: true
    }

})

UserSchema.statics.authenticate = function (username, password, callback) {
    User.findOne({ username: username })
      .exec(function (err, user) {
        if (err) {
          return callback(err)
        } else if (!user) {
          var err = "error"
          return callback(err);
        }
        bcrypt.compare(password, user.password, function (err, result) {
          if (result === true) {
            return callback(null, user);
          } else {
            return callback();
          }
        })
      });
  }

UserSchema.pre('save', function (next) {
      var user = this;
      bcrypt.hash(user.password, 10, function (err, hash){
        if (err) {
          return next(err);
        }
        user.password = hash;
        next();
      })
    });

var User = mongoose.model('User', UserSchema);
module.exports = User;