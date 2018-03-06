var db = require("../models");

module.exports = {
    createNewUser: function(req, res) {
        if(req.body != null){
            db.user.create(req.body)
            .then(function(dbUser) {
                res.json(dbUser);
            })
            .catch(function(err){
                console.log(err)
            })
        }
    },
    userlogin: function(req, res) {
        if (req.body.username && req.body.password) {
            db.user.authenticate(req.body.username, req.body.password, function (error, user) {
              if (error || !user) {
                return res.render("cmslogin", {error401: "Invalid username or password"});
              } else {
                req.session.userId = user._id;
                return res.redirect('/cms');
              }
            });
          } else {
            return res.render("cmslogin", {error400: "All fields required"});
          }
    },
    userlogout: function(req, res) {
        if (req.session) {
            // delete session object
            req.session.destroy(function (err) {
              if (err) {
                return err;
              } else {
                return res.redirect('/');
              }
            });
          }
    }
}