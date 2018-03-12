var controller = require("../controllers/index");
var loginAuth = require("../middleware/loginauth");

module.exports = function(app) {
    app.post("/register", loginAuth, function(req, res) {
        controller.usercontroller.createNewUser(req, res);
    })
    
    app.post("/login", function(req, res){
        controller.usercontroller.userlogin(req, res);
    })

    app.get('/logout', function (req, res, next) {
        controller.usercontroller.userlogout(req, res);
      });

    app.post("/sendmail", function(req, res){
        controller.mailcontroller.sendMail(req, res);
    })
}