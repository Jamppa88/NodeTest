var Connection = require('tedious').Connection;
var Request = require('tedious').Request;
var config = require('../../config.js');

module.exports = function(body, callback) {
  var connection = new Connection(config);
  var data = [];
  
    connection.on("connect", function(err) {
      
      if (err)
        callback(err);
      else {
        console.log("Reading data...");
        request = new Request(
          "SELECT * FROM dbo.Monsters where name like '%"+body.query+"%' FOR JSON AUTO",
          function(err, rowCount, rows) {
            if (err)
              callback(err);
            else {
              callback(data);
            }
        });
        request.on('row', function(columns) {
          data += columns[0].value;
        });

        connection.execSql(request);
      }
    });
}