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
                "UPDATE dbo.Monsters " +
                "SET name = '"+data.obj.name+"', mod = "+data.obj.mod+", adv = '"+data.obj.adv+"', isPC = '"+ data.obj.isPC + "' " +
                "WHERE id = "+data.obj.id ,
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