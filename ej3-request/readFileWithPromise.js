/**
 * Created by cuanini on 10/11/17.
 */
const fs = require('fs');

module.exports = (fileName, encoding) => {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, encoding, (err, data) => {
            if(err) {
               reject(err);
            } else {
                resolve(data)
            }
        });
    });
}