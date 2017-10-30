
## Parte 2 : Express

### C: Controllers
-Crear los controladores para cada ruta

#### Ejercicio Dictado:  
/app/items/MLA1232323  
/app/search?q="iphone" 

#### Ejercicio Participantes: 
/api/search?q="iphone"  
/api/items/MLA1232323  

#### Entregables:  
`controllers/app.controller.js`  
`controllers/api.controller.js`  

Modificar:  
`routers/router.js`  

### D: Middleware
-Crear un middleware para que cada request contengan los datos del autor del ejercicio.  
-Crear un middleware para manejo de errores.  

#### Bibliografía:  
[Express Middlewares](http://expressjs.com/es/guide/using-middleware.html)  

#### Entregables:  
`middlewares/author.middleware.js`  
`middlewares/errors.middleware.js`  
Modificar:   
`routers/router.js`  
`controllers/api.controller.js`  
