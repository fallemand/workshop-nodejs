const https = require('https');
const http = require('http');

exports.normalReq = (options, success, error) => {
    const protocol = (options.protocol === 'https') ? https : http;
    delete options.protocol;

    protocol.request(options, (resp) => {
        let data = '';
        
        resp.on('data', chunk => {
            data += chunk;
        });
    
        resp.on('end', () => {
            data = JSON.parse(data);
            // Handle http errors
            if (resp.statusCode < 200 || resp.statusCode > 299) {
                error(data);
            } else {
                success(data);
            }
        })
    }).on('error', (err) => {
        error({
            err
        });
    }).end();
}

exports.promiseRequest = (options) => {
    return new Promise((resolve, reject) => {
        const protocol = (options.protocol === 'https') ? https : http;
        delete options.protocol;
    
        protocol.request(options, (resp) => {
            let data = '';
            
            resp.on('data', chunk => {
                data += chunk;
            });
        
            resp.on('end', () => {
                data = JSON.parse(data);
                // Handle http errors
                if (resp.statusCode < 200 || resp.statusCode > 299) {
                    reject(data);
                } else {
                    resolve(data);
                }
            })
        }).on('error', (err) => {
            reject({
                err
            });
        }).end();
    })
}
