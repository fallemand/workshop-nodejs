const https = require("https");
const http = require("http");

module.exports = options => {
  return new Promise((resolve, reject) => {
    const protocol = options.protocol === "https" ? https : http;
    delete options.protocol;

    protocol
      .request(options, resp => {
        let data = "";

        resp.on("data", chunk => {
          data += chunk;
        });

        resp.on("end", () => {
          resolve(data);
        });
      })
      .on("error", err => {
        reject(err);
      })
      .end();
  });
};
