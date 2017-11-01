const https = require('https');

https.get('https://api.mercadolibre.com/sites/MLA/search?q=iphone7', (resp) => {
  let data = '';

  resp.on('data', chunk => {
    data += chunk;
  });

  resp.on('end', () => {
    console.log(JSON.parse(data));
  });

}).on('error', (err) => {
  console.log(err);
});


// https.get('https://api.mercadolibre.com/sites/MLA/search?q=iphone7', (resp) => {
//
//     let data = '';
//     console.log(resp);
//
//     resp.on('data', (chunk) => {
//         data += chunk;
//     });
//
//     resp.on('end', () => {
//         console.log(JSON.parse(data));
//     });
//
//
// }).on("error", (err) => {
//     console.log("Error: " + err.message);
// });
