var loginAuth = require("../middleware/loginauth");
var controller = require("../controllers/index");

module.exports = function(app) {
    app.get("/", function(req, res){
        res.render("home");
    })

    app.get("/contact", function(req, res){
        res.render("contact");
    })

    app.get("/projects", function(req, res){
        controller.projectcontroller.loadProjectPage(req, res);
    })

    app.get("/about", function(req, res){
        res.render("about");
    })

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
        switch (req.params.category){
            case "users": res.render("cms", {users: true});
            break;
            case "projects": res.render("cms", {projects: true});
            break;
            default: res.render("cms", {projects: true});

        }
    })
}