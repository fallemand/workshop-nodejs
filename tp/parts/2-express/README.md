
## Parte 2 : Express
### A: Configurar Server
-Instalar express y levantar server.  

#### Dependencias:
[express](https://github.com/expressjs/express)  

#### Entregables: 
`index.js`

### B: Router
-Configurar rutas  

#### Bibliografía:  
[Express Router](http://expressjs.com/es/guide/routing.html)  

#### Ejercicio Dictado:  
/app/items/MLA1232323   
/app/search?q="iphone"  

#### Ejercicio Participantes: 
/api/search?q="iphone"  
/api/items/MLA1232323  

#### Entregables:  
`routers/api.router.js`  
`routers/app.router.js`  
`routers/router.js`  

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

### E: Services
-Integrar el archivo `meli.service.js` y `request.js`  

#### Ejercicio Dictado:  
Mostramos como hacer para que la llamada a `api/search?q=iphone` devuelva el json con los resultados de la api de mercadolibre.

#### Ejercicio Participantes: 
Deberan dejar funcionando todas las llamadas.

`api/item/MLA2314234234` Retorna `JSON`: Debe devolver todos los datos de un item, incluida la description en el atributo `text`  
`api/search?q=iphone` Retorna `JSON`: Debe retornar los resultados del search de MercadoLibre  
`api/suggest?q=iphone` Retorna `JSON`: Debe retornar las sugerencias de búsqueda  
`app/item/MLA2314234234` Retorna `TXT`: Por ahora solo imprime en pantalla el resultado a la llamada a la api  
`app/search?q=iphone` Retorna `TXT`: Por ahora solo imprime en pantalla el resultado a la llamada a la api  

#### Entregables:  
`services/request.service.js`  
`services/meli.service.js`  
Modificar:   
`controllers/app.controller.js`  
`controllers/api.controller.js`  

### F: React
Vamos a configurar react para utilizar en las vistas.  

#### Dependencias:
[react](https://github.com/facebook/react)  
[react-dom](https://github.com/facebook/react)  
[express-react-views](https://github.com/reactjs/express-react-views)  
[prop-types](https://github.com/facebook/prop-types)  
`npm install react react-dom express-react-views prop-types --save`  

#### Ejercicio Dictado:  
-Crearemos un layout.  
-Crearemos una page  
-Haremos que la ruta `app/search?q=iphone` sea renderizada utilizando una page .jsx  

#### Ejercicio Participantes: 
Completar todas las vistas restantes.  

#### Entregables:  
`views/components/Layout.jsd`  
`views/components/Header.jsx`  
`views/components/Breadcrumb.jsx`  
`views/components/SearchItem.jsx`  
`views/components/Suggest.jsx`  
`views/Index.jsx`  
`views/Search.jsx`  
`views/Error.jsx`  
`views/Item.jsx`  
Modificar:  
`package.json`  
`index.js`  
`controllers/app.controller.js`  
`routers/app.router.js`  
