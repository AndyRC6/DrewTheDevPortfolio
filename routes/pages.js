var loginAuth = require("../middleware/loginauth");

module.exports = function(app) {
    app.get("/", function(req, res){
        res.render("home");
    })

    // app.get("/register", function(req, res) {
    //     res.render("register");
    // })

    app.get("/skills/:category?", function(req, res){
        res.render("skills");
    })

    app.get("/cms", loginAuth, function(req, res) {
        res.render("cms");
    })
}