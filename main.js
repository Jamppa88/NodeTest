var express = require('express');
//var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser());
//app.use(cors());

app.get('/', function(req,res) {
  res.send("Hello world!");
});

app.get('/getdata', function(req,res) {
  var test = require('./test.js');
  test(function(data) {
    res.send(data);
  });
});

app.post("/insertdata", function(req,res) {
  //res.send(req.body);
  var ins = require('./insert-test.js');
  ins(req.body, function(response) {
    res.send(response);
  });
});

app.post("/deleteitem", function(req,res) {
  var del = require("./delete-test.js");
  del(req.body, function(response) {
    res.send(response);
  });
});

var server = app.listen(process.env.PORT || 80, function() {
  var host = server.address().address;
  var port = server.address().port;
  
  console.log("Example app listening at http://%s:%s", host, port);
});