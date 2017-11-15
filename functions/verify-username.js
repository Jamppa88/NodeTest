var Connection = require('tedious').Connection;
var Request = require('tedious').Request;
var config = require('../../config.js');

module.exports = function(username, callback) {
  var connection = new Connection(config);
  var data;
  connection.on("connect", function(err) {
    if (err)
      callback(err);
    else {
      console.log("Checking username validity...");
      request = new Request(
        "SELECT * FROM dbo.Login WHERE username = '"+username+"' FOR JSON AUTO, WITHOUT_ARRAY_WRAPPER",
        function(err, rowCount, rows) {
          if (err)
            callback(err);
          else {
            if (data) {
              console.log("User exists!");
              callback("User exists!");
            } else {
              console.log("Valid.");
              callback();
            }
          }
      });
      request.on('row', function(columns) {
        data = columns[0].value;
      });
      connection.execSql(request);
    }
  });
}