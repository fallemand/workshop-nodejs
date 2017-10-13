const meliService = require('./meli.service');



meliService.search('iphone').then((results) => {
    console.log(results);
}).catch((err) =>{
    console.log(err);
});
  
meliService.suggest('ipho').then((results) => {
    console.log(results);
}).catch((err) =>{
    console.log(err);
});


meliService.item('MLA632591345').then((results) => {
    console.log(results);
}).catch((err) =>{
    console.log(err);
});


