//======Modules=======
var express = require('express');
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var path = require('path');
var mongoose = require("mongoose");
var session = require("express-session");
var MongoStore = require("connect-mongo")(session);

//=======BoilerPlate=======


var app = express();
var port = process.env.PORT || 3000;


mongoose.Promise = global.Promise;
app.use(session({
    secret: 'dont die',
    resave: true,
    saveUninitialized: false,
    store: new MongoStore({
        url: process.env.MONGODB_URI || "mongodb://localhost/portfolio"
    }),
    httpOnly: true,
    secure: false,
    maxAge: null,
    path: "/"
}));



app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/public')));
  

  

// if in dev environment, connect to local mongo db, otherwise if deployed, connect to environment mongo db
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/portfolio",
    {useMongoClient: true}
);
  
  

//=======Routes=======
require("./routes")(app);

app.listen(port, function(){
    console.log("🌎  ==> Server now listening on PORT: " + port);
});