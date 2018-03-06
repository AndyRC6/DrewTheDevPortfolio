var mongoose = require("mongoose");

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
    image: {
        type: String
    }

});

var Project = mongoose.model('Project', ProjectSchema);
module.exports = Project;