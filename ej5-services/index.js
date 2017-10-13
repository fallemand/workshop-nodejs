const MeliService = require("./meli.service");

MeliService.item("MLA632591345")
  .then(data => {
    console.dir(data);
  })
  .catch(err => {
    console.log(err);
  });

MeliService.search("iphone7").then(data => {
  console.log(`Resultados de búsqueda: ${data}`);
});

MeliService.suggest("iph").then(data => {
  console.log(`Resultados de sugerencia: ${data}`);
});
