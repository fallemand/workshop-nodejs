module.exports.search = (search) => {  
  console.log(search)  
  return {
      query : search.query,
      pagging: search.pagging,
      filters: search.filters,
      results : search.results.map((result) => {
          return {
              id : result.id,
              title : result.title,
              address: result.address
          }
      })
  }  
};

module.exports.suggest = (result) => {
    /*
    
    query
    results
    */ 
};

module.exports.item = (result) => {

};