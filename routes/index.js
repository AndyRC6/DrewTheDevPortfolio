var pages = require('./pages');
var api = require('./api')

module.exports = function(app){
    pages(app);
    api(app);
}