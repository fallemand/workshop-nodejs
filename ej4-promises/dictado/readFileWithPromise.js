const fs = require('fs');

const readFileWithPromise = (fileName, encoding = 'utf8') => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, encoding, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

module.exports = readFileWithPromise;
