/**
 * Created by cuanini on 10/11/17.
 */
const https = require('https');
const http = require('http');

module.exports = (options) => {
    return new Promise((resolve, reject) => {
        const protocol = (options.protocol === 'http') ? http : https;
        delete options.protocol;

        protocol.request(options, (resp) => {
            let data = '';
            resp.on('data', (chunk) => {
                data += chunk;
            });
            resp.on('end', () => {
                const result = JSON.parse(data);
                //handle http error
                if (resp.statusCode < 200 || resp.statusCode > 299) {
                    reject(result);
                }
                else {
                    resolve(result);
                }
            });
        }).on('error', (err) => {
            reject(err);
        }).end();
    });
};
