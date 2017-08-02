module.exports = (options, callback) => {
  var protocol = (options.protocol === 'http') ? require('http') : require('https');
  delete options.protocol;
  protocol.request(options, response => {
    var result = [];
    response.on('data', chunk => {
      result.push(chunk);
    })
    response.on('end', () => {
      result = JSON.parse(result.join(''));
      // Handle http errors
      if (response.statusCode < 200 || response.statusCode > 299) {
        callback(result);
      }
      else {
        callback(result);
      }
    })

  }).on('error', function(err) {
    callback(err);
  }).end();
}
