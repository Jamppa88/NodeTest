//var express = require('express');
var Connection = require('tedious').Connection;
var Request = require('tedious').Request;
var config = require('../config.js');

var data = [];

module.exports = function (callback) {
  var connection = new Connection(config);
  
  // Attempt to connect and execute queries if connection goes through
  connection.on('connect', function(err) 
      {
        if (err) 
          {
            console.log(err);
            callback(err);
          }
      else
          {
              queryDatabase()
          }
      }
    );
  
  function queryDatabase() {
    console.log("Reading rows from the Table...");
      // Read all rows from table
    request = new Request(
      "SELECT id, name, JSON_QUERY(json) as json" + 
      "FROM dbo.test" +
      "FOR JSON AUTO",
          function(err, rowCount, rows) 
            {
                console.log(rowCount + ' row(s) returned');
                console.log("rows: " + rows);
                connection.close();
                //callback(data)
                var datastr = JSON.stringify(data);
                callback(datastr); 
                data = [];
            }
        );
  
    request.on('row', function(columns) {
      data = columns[0].value;
      /* var json = JSON.parse(columns[2].value);
      var item = {id: columns[0].value, name: columns[1].value, json: json};
      console.log(item);
      data.push(item); */
      /* columns.forEach(function(column) {
          console.log("%s\t%s", column.metadata.colName, column.value);
      }); */
    });
    connection.execSql(request);
  }
}







