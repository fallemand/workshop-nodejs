const requestPromise = require("./requestPromise");

const optionsHttps = {
  protocol: "https",
  method: "GET",
  headers: { "Content-type": "application/json" },
  hostname: "api.mercadolibrexx.com",
  path: "/sites/MLA/search?q=iphone7"
};

const optionsHttp = {
  protocol: "http¡",
  method: "GET",
  headers: { "Content-type": "application/json" },
  hostname: "api.mercadolibre.com",
  path: "/items/MLA683567563"
};

requestPromise(optionsHttps)
  .then(data => {
    console.log("Data desde la promesa: ", data);
  })
  .catch(err => {
    console.log("Error de la promesa: ", err.toString());
  });
