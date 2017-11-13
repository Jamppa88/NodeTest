var jwt = require('jsonwebtoken');
var jwtConfig = require('../../jwt-config');


module.exports = function(token, callback) {

  jwt.verify(token, jwtConfig.secret, function(err, decoded) {
    if (err)
      callback("Verification failed!");
    else {
      callback(decoded);
    }
  });
}