const request = require('./request');

module.exports.search = (query) => {

  const searchOptions = {
    method: 'GET',
    headers: {'Content-type': 'application/json'},
    hostname: 'api.mercadolibre.com',
    path: `/sites/MLA/search?q=${query}`
  };

  return request(searchOptions);
};
