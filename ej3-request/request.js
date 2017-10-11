const https = require('https');
const http = require('http');

module.exports = (options, success, error) => {
    const protocol = (options.protocol === 'http') ? http : https;
    delete options.protocol;

    protocol.request(options, (resp) => {
        let data = '';

        resp.on('data', (chunk) => {
            data += chunk;
        });

        resp.on('end', () => {
            result = JSON.parse(data);
            //handle http error
            if (resp.statusCode < 200 || resp.statusCode > 299) {
                error(result)
            }
            else {
                success(result);
            }
        });

    }).on('error', (err) => {
       const response = {
           err : err
       }
    }).end();

};