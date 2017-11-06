var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser());


app.get('/', function(req,res) {
  res.send('Pörlödö');
});

app.get('/getdata', function(req,res) {
  var test = require('./test.js');
  test(function(data) {
    res.send(data);
  });
});

app.post("/insertdata", function(req,res) {
  var ins = require('./insert-test.js');
  ins(req.body, function(response) {
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