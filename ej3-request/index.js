const request = require("./request");

const optionsHttps = {
  protocol: "https",
  method: "GET",
  headers: { "Content-type": "application/json" },
  hostname: "api.mercadolibre.com",
  path: "/sites/MLA/search?q=iphone7"
};

const optionsHttp = {
  protocol: "http¡",
  method: "GET",
  headers: { "Content-type": "application/json" },
  hostname: "api.mercadolibre.com",
  path: "/items/MLA683567563"
};

function success(data) {
  console.log('Success: ', data);
}

function error(err) {
  console.log("Error: ", err);
}

request(optionsHttps, success, error);
