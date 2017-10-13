let fs = require('fs');
let readFileWithPromise = (fileName) => {
    return new Promise((resolve, reject) => {
        fs.readFile(fileName, 'utf8', (err, data) => {
            if (err) reject(err);
            resolve(data);
        });
    });
};

module.exports = readFileWithPromise;
