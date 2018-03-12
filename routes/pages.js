var loginAuth = require("../middleware/loginauth");

module.exports = function(app) {
    app.get("/", function(req, res){
        res.render("home");
    })

    app.get("/contact", function(req, res){
        res.render("contact");
    })

    // app.get("/register", function(req, res) {
    //     res.render("register");
    // })

    app.get("/skills/:category?", function(req, res){
        switch (req.params.category){
            case "languages": res.render("skills", {languages: true});
            break;
            case "technologies": res.render("skills", {technologies: true});
            break;
            case "other": res.render("skills", {other: true});
            break;
            default: res.render("skills", {languages: true});

        }
    })

    app.get("/cms/:category?", loginAuth, function(req, res) {
        res.render("cms");
    })
}