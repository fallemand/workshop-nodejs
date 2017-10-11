const https = require('https');
const http = require('http');

const request = (options, success, error) => {

    const protocol = (options.protocol === 'https') ? https : http;
    delete options.protocol;

    protocol.request(options, (resp) => {
    
        let data = '';

        // En las arrow function si es un solo parametro los () son opcionales
        resp.on('data', (chunk) => {

            data += chunk
        });

        resp.on('end', () => {
            data = JSON.parse(data)

            // Handle HTTP errors
            if(resp.statusCode < 200 || resp.statusCode > 299) {

                error(data);
            } else {

                success(data);
            }
        })
    }).on('error', (err) => {

        error(err);
    }).end();
}

module.exports.request = request;