var Connection = require('tedious').Connection;
var Request = require('tedious').Request;
var config = require('../../config.js');
var bcrypt = require('bcryptjs');
var verifyUsername = require('./verify-username');


module.exports = function (data, callback) {
  var connection = new Connection(config);

  connection.on("connect", function(err) {
    if (err)
      callback(err);
    else {
      verifyUsername(data.username, function(err) {
        if (err) {
          callback(err);
        } else {
          console.log("Inserting into database...");
          bcrypt.hash(data.password, 10, function(err, hash) {
            if (!!err) {
              console.log("Failed in hashing!");
              callback(err);
            } else {
              request = new Request(
                "INSERT INTO dbo.Login (username, password, rigths) VALUES ('" + data.username + "', '"+ hash +"', 'false')",
                function(err, rowCount, rows) {
                  if (err) {
                    console.log("Failed in request!");
                    callback(err);
                  } else {
                    console.log("Created user: " + data.username);
                    callback("Success");
                  }
              });
              connection.execSql(request);
            }
          });
        }
      });
      
    }
  });
}