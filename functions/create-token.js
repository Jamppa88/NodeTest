var jwt = require('jsonwebtoken');
var jwtConfig = require('../../jwt-config');

module.exports = function(body, callback) {
  const payload = {
    username: body.name,
    rights: body.rights
  }
  var token = jwt.sign(payload, jwtConfig.secret, {
    expiresIn: "1d"
  });
  
  callback(token);
}