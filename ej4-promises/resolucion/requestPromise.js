const https = require('https');
const http = require('http');

const requestPromise = (options) => {

    return new Promise((resolve, reject) => {

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
    
                    reject(data);
                } else {
    
                    resolve(data);
                }
            })
        }).on('error', (err) => {
    
            reject(err);
        }).end();
    });
}

module.exports = requestPromise;