var mongoose = require("mongoose");
var moment = require('moment');

var Schema = mongoose.Schema;

var ProjectSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    url: {
        type: String,
        trim:true
    },
    github_url: {
        type: String,
        trim:true
    },
    technologies: {
        type: String,
        trim:true
    },
    image: {
        type: String
    },
    date: {
        type: String,
        default: moment().format('MMMM Do YYYY')
    }

});


var Project = mongoose.model('Project', ProjectSchema);
module.exports = Project;