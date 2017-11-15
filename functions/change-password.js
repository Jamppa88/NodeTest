var Connection = require('tedious').Connection;
var Request = require('tedious').Request;
var config = require('../../config.js');
var validate = require('./validate-user');
var checkPass = require('./validate-password');
var bcrypt = require('bcryptjs');


module.exports = function (data, callback) {
  validate(data.token, function(response) {
    var validateObj = {
      username: response.username,
      password: data.oldPassword
    }
    checkPass(validateObj, function(err) {
      if (err)
        callback("oldPassword incorrect!");
      else {
        bcrypt.hash(data.newPassword, 10, function(err, hash) {
          var connection = new Connection(config);
          
          connection.on("connect", function(err) {
            if (err)
              callback(err);
            else {
              console.log("Reading data...");
                request = new Request(
                    "UPDATE dbo.Login " +
                    "SET password = '"+ hash +"' " +
                    "WHERE username = '" + response.username + "'" ,
                    function(err, rowCount, rows) {
                    if (err)
                        callback(err);
                    else {
                        callback("Success");
                    }
                });
              connection.execSql(request);
            }
          });
        });
      }
    });
  });
}