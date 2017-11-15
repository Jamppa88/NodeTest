var validate = require('./validate-user');

module.exports = function(data, callback) {
  validate(data.token, function(response) {
    callback(response.username);
  });
    
}