var express = require("express")
var app = express()
var bodyParser = require("body-parser")
var config = require("./config")
app.set('view engine', 'ejs');
app.use('/public', express.static('public'));
app.use(bodyParser.urlencoded({
  extended: true
}))

app.get("/", function(req, res){
  res.render("quest");
});
app.get("/glavnaya", function(req, res){
  res.render("4")
});
app.get("/zadanie", function(req, res){
  res.render("1")
});
app.get("/resursi", function(req, res){
  res.render("2")
});
app.get("/zakluchenie", function(req, res){
  res.render("3")
});
app.get("/primeri", function(req, res){
  res.render("primer")
});
app.get("/primer2", function(req, res){
  res.render("primer2")
});
app.get("/kriterii", function(req, res){
  res.render("kriterii")
});
app.use(function(req, res){
  res.render("404")
})






module.exports = app;
