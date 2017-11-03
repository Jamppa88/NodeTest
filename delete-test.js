var Connection = require('tedious').Connection;
var Request = require('tedious').Request;
var config = require('../config.js');

module.exports = function (data, callback) {
  var connection = new Connection(config);
  
  connection.on("connect", function (err) {
    if (err) 
      callback(err);
    else {
      console.log("Reading data...");
      request = new Request("DELETE FROM dbo.test WHERE id = " + data.index,
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

}