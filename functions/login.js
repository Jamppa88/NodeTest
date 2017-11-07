var Connection = require('tedious').Connection;
var Request = require('tedious').Request;
var config = require('../../config.js');
var bcrypt = require('bcryptjs');

module.exports = function(body, callback) {
  var connection = new Connection(config);
  var data = {};
  
    connection.on("connect", function(err) {
      
      if (err)
        callback(err);
      else {
        console.log("Reading data...");
        request = new Request(
          "SELECT id, username, password FROM dbo.Login where username = '"+body.username+"' FOR JSON AUTO, WITHOUT_ARRAY_WRAPPER",
          function(err, rowCount, rows) {
            if (err)
              callback(err);
            else {
              bcrypt.compare(body.password, data.password, function (err, res) {
                if (!res) 
                  callback(JSON.stringify({err: true}));
                else
                  callback(JSON.stringify([data.id, data.username]));
              });
            }
        });
        request.on('row', function(columns) {
          data = JSON.parse(columns[0].value);
        });

        connection.execSql(request);
      }
    });
}