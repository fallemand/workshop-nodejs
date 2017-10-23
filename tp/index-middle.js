const express = require('express');
const app = express();
const router = express.Router();

/*
    app.locals = {
        version : 'v1' //vaoable al nivel aplication

    }
*/ 

const request = ()=>{
    return new Promise((resolve, reject) => {
        if(true){
            resolve('TODO OK');
        } else {
            reject('ERORR!!!')
        }
    });
};

const middleware = (req, res, next) =>{
    res.locals.version = 'v1';
}

router.get('/foo', (req, res, next)=>{
    request().then((data) => {
        data.version = res.locals.version;
        res.send(data);
    }).catch(next)
    

});

app.use(middleware);
app.use(router);

app.listen('3000', 'localhost', () => {
    console.log('app listen 3000!');
})