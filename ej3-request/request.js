const https = require('https')
const http = require('http');

module.exports = (options, success, error) =>{

    const protocol = (options.protocol === 'https')? https : http;
    delete options.protocol;

    protocol.request(options, (resp) =>{
        let data = '';
    
        resp.on('data', chunck => {
            data += chunck;
        });
    
        resp.on('end', () =>{
            data = JSON.parse(data);
            //handle http errors
            if(resp.statusCode < 200 || resp.statusCode > 299){
                error(data);        
            } else {
                success(data);        
            }            
        });            
    }).on('error', (err) =>{        
        error({
            err
        });
    }).end();    
};
