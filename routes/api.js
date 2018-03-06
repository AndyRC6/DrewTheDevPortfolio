var controller = require("../controllers/index");

module.exports = function(app) {
    app.post("/register", function(req, res) {
        controller.usercontroller.createNewUser(req, res);
    })
    
    app.post("/login", function(req, res){
        controller.usercontroller.userlogin(req, res);
    })

    app.get('/logout', function (req, res, next) {
        controller.usercontroller.userlogout(req, res);
      });
}