const https = require('https');
const http = require('http');

module.exports = (options) => {

    const protocol = (options.protocol === 'http') ? http : https;
    delete options.protocol;
    
    return new Promise((resolve, reject) => {

        protocol.request(options, (resp) => {
            let data = '';

            resp.on('data', chunk => {
                data += chunk;
            });

            resp.on('end', () => {
                // return success(data);
                response = JSON.parse(data);
                // handle http errors

                if(response.statusCode > 200 || response.statusCode < 299) {
                    reject(data);
                }
                else {
                    resolve(data);
                }
            });
        }).on('error', (err) => {
            reject(err);
        }).end(); 
    });

}