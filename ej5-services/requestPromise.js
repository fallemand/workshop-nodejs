const https = require('https')
const http = require('http');

module.exports = (options) => {

    return new Promise((resolve, reject) => {

        const protocol = (options.protocol === 'https') ? https : http;
        delete options.protocol;

        protocol.request(options, (resp) => {
            let data = '';

            resp.on('data', chunck => {
                data += chunck;
            });

            resp.on('end', () => {
                try{
                    data = JSON.parse(data);
                } catch(err){
                    data = data;
                }
                //handle http errors
                if (resp.statusCode < 200 || resp.statusCode > 299) {
                    reject(data);
                } else {
                    resolve(data);
                }
            });
        }).on('error', (err) => {
            reject({
                err
            });
        }).end();
    })
};
