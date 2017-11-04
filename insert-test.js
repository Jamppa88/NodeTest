var Connection = require('tedious').Connection;
var Request = require('tedious').Request;
var config = require('../config.js');


module.exports = function (data, callback) {
  
  var connection = new Connection(config);

  connection.on("connect", function(err) {
    if (err)
      callback(err);
    else {
      console.log("Reading data...");
      if (data.json) {
        request = new Request(
          "INSERT INTO dbo.test (name, json) VALUES ('" + data.name + "', '"+ data.json +"')",
          function(err, rowCount, rows) {
            if (err)
              callback(err);
            else {
              callback("Success");
            }
        });
      } else {
        request = new Request("INSERT INTO dbo.test (name) VALUES ('" + data.name + "')",
        function(err, rowCount, rows) {
          if (err)
            callback(err);
          else {
            callback("Success");
          }
        });
      }
      
      connection.execSql(request);
    }
  });
}