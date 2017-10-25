
const logError = (err) =>{
    console.error(err);
}

module.exports.apiError = (err, req, res, next) => {  
    logError(err);
    if(err instanceof Error){
        err = { 
            status : 500,
            message : err.toString() 
        };
    }
    res.status(err.status || 500).send(err);
    next();
};

module.exports.appError = (err, req, res, next) => {       
    logError(err);
  
};

