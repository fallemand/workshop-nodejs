const https = require('https');
const http = require('http');

module.exports = (options, success, error) => {

    const protocol = (options.protocol === 'https') ? require('https') : require('http');

    delete options.protocol;

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
                error(data);
            }
            else {
                success(data);
            }
        });
    }).on('error', (err) => {
        error(err);
    }).end();

}