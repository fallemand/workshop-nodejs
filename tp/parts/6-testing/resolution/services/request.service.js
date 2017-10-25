//With Promise
module.exports = (options) => {
    let protocol = (options.protocol === 'http') ? require('http') : require('https');
    delete options.protocol;
    return new Promise((resolve, reject) => {
        protocol.request(options, response => {

            // Temporary data holder
            let result = [];
            response.on('data', chunk => {
                result.push(chunk);
            })

            // Resolve promise
            response.on('end', () => {
                result = result.join('');
                // Handle http errors
                if (response.statusCode < 200 || response.statusCode > 299) {
                    reject(result);
                }
                else {
                    result = JSON.parse(result);
                    resolve(result);
                }
            })

        }).on('error', function(err) {
            reject(err);
        }).end();
    })
}
