const https = require('https');
const http = require('http');

module.exports = (options, callback) => {
    const protocol = (options.protocol === 'http') ? http : https;
    delete options.protocol;

    protocol.request(options, (res) => {
        let data = '';

        res.on('data', (chunk) => {
            data += chunk;
        });

        res.on('end', () => {
            data = JSON.parse(data);
            if (res.statusCode < 200 || res.statusCode > 299) {
                callback(err,null)
            }
            callback(null,data);
        })
    }).on('error', (err) => {
        console.log(err);
        callback(err,null);
    }).end();
};

