var Connection = require('tedious').Connection;
var Request = require('tedious').Request;
var config = require('../../config.js');
var validate = require('./validate-user');


module.exports = function (data, callback) {
  validate(data.token, function(response) {
    if (!response.rights)
      callback("Check your rights!");
    else {
      var connection = new Connection(config);
      
      connection.on("connect", function(err) {
        if (err)
          callback(err);
        else {
          console.log("Reading data...");
            request = new Request(
                "DELETE FROM dbo.Monsters WHERE id = "+data.id,
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
  });
}