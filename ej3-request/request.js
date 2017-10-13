const https = require("https");
const http = require("http");

module.exports = (options, successCb, errorCb) => {
  const protocol = options.protocol === "https" ? https : http;
  delete options.protocol;

  protocol
    .request(options, resp => {
      let data = "";

      resp.on("data", chunk => {
        data += chunk;
      });

      resp.on("end", () => {
        successCb(data);
      });
    })
    .on("error", err => {
      errorCb(err);
    })
    .end();
};
