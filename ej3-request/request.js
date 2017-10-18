const https = require('https');
const http = require('http');

module.exports = (options, success, error) => {
    const protocol = (options.protocol == 'http') ? http : https;
    delete options.protocol;

    protocol.request(options, (resp) => {
        let data = '';

        resp.on('data', (chunk) => {
            data += chunk;
        });

        resp.on('end', () => {
            data = JSON.parse(data);
            //handle http errors
            if (resp.statusCode < 200 || resp.statusCode > 299) {
                error(data);
            } else {
                success(data);
            } 
        });
    }).on('error', (err) => {
        error(err);
    }).end();
}



// Con Class

// class request {

//     static makeRequest(options, success, error) {
//         https.request(options, (resp) => {
//             let data = '';

//             resp.on('data', (chunk) => {
//                 data += chunk;
//             });

//             resp.on('end', () => {
//                 success(data);
//             });
//         }).on('error', (err) => {
//             error(err);
//         }).end();
//     }
// }

// module.exports = request;
