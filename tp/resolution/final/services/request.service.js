//With Promise
module.exports = (options) => {
    var protocol = (options.protocol === 'http') ? require('http') : require('https');
    delete options.protocol;
    return new Promise((resolve, reject) => {
        protocol.request(options, response => {

            // Temporary data holder
            var result = [];
            response.on('data', chunk => {
                result.push(chunk);
            })

            // Resolve promise
            response.on('end', () => {
                result = JSON.parse(result.join(''));
                // Handle http errors
                if (response.statusCode < 200 || response.statusCode > 299) {
                    reject(result);
                }
                else {
                    resolve(result);
                }
            })

        }).on('error', function(err) {
            reject(err);
        }).end();
    })
}
