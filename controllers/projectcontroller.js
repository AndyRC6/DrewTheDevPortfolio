var db = require('../models');


module.exports = {
    addProject: function(req, res){
        if(req.body != null){
            db.project.create(req.body)
            .then(function(dbProject) {
                res.render("cms", {projects: true, project: dbProject});
            })
            .catch(function(err){
                res.render("cms", {projects: true, error: true});
            })
        }
    },
    loadProjectPage: function(req, res) {
        db.project.find({})
        .then(function(dbProjects){
            res.render("projects", {dbProjects})
        }).catch(function(err){
            console.log(err);
        })
    }
}