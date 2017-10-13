const fs = require('fs');
const file = './textttt.txt';

const readFileWithPromise = (file, encoding = 'utf8') => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, encoding, (err, data) => {
      (err) ? reject(err) : resolve(data);
    });
  });
};

readFileWithPromise(file)
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
