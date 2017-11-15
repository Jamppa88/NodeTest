var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
app.use(bodyParser());
app.use('/public',express.static('public'));
app.use('/fonts',express.static('fonts'));


app.get('/', function(req,res) {
  res.sendFile(path.join(__dirname,'/index.html'));
});

app.post('/getUser', function(req,res) {
  var getUser = require('./functions/get-user');
  getUser(req.body, function(response) {
    res.send(response);
  });
});

app.post("/login", function(req,res) {
  var validate = require('./functions/login');
  validate(req.body, function(response) {
    res.send(response);
  });
});

app.post("/registerNewUser", function(req,res) {
  var register = require("./functions/insert-new-user");
  register(req.body, function(response) {
    res.send(response);
  });
});

app.post("/changePassword", function(req,res) {
  var change = require("./functions/change-password");
  change(req.body, function(response) {
    res.send(response);
  });
});

app.post("/insertmon", function(req, res) {
  var insMon = require('./functions/insert-new-monster');
  insMon(req.body, function(response) {
    res.send(response);
  });
});

app.get("/getmonsters", function (req,res) {
  var getMon = require("./functions/get-all-monsters");
  getMon(function(data) {
    res.send(data);
  });
});

app.post("/getmonster", function (req,res) {
  var getMon = require("./functions/get-monster");
  getMon(req.body, function(data) {
    res.send(data);
  });
});

app.post("/deletemon", function(req,res) {
  var delMon = require('./functions/delete-monster');
  delMon(req.body, function(response) {
    res.send(response);
  });
});

app.post("/modifymon", function(req,res) {
  var modMon = require("./functions/modify-monster");
  modMon(req.body, function(response) {
    res.send(response);
  });
});

var server = app.listen(process.env.PORT || 80, function() {
  var host = server.address().address;
  var port = server.address().port;
  
  console.log("Example app listening at http://%s:%s", host, port);
});