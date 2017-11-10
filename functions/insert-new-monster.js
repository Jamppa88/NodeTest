var Connection = require('tedious').Connection;
var Request = require('tedious').Request;
var config = require('../../config.js');


module.exports = function (data, callback) {
  
  var connection = new Connection(config);

  connection.on("connect", function(err) {
    if (err)
      callback(err);
    else {
      console.log("Reading data...");
        request = new Request(
            "INSERT INTO dbo.Monsters (name, mod, adv, isPC) VALUES ('" + data.name + "', "+ data.mod +", '"+data.adv+"', '"+data.isPC+"')",
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