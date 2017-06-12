# Ejercicio Final
En cada parte vamos a ir agregando código que se integre al trabajo final.

## Parte 1 : Npm Scripts
#### Ejercicio Dictado:  
Explicar el buildeo de Sass, autoprefix y minificación. 
Crear un watch de Sass.  

#### Ejercicio Participantes:   
-Comprimir imágenes.  
-Compilar y minificar código JS.  
-Generar Watchers  

#### Entregables: 
`package.json`  
`assets/scr/styles/components/_layout.scss`  
`assets/scr/styles/components/_breadcrumb.scss`  
`assets/scr/styles/components/_header.scss`  
`assets/scr/styles/pages/_item.scss`  
`assets/scr/styles/pages/_index.scss`  
`assets/scr/styles/pages/_search.scss`  
`assets/scr/styles/pages/_error.scss`  
`assets/scr/styles/main.scss`  

## Parte 2 : Express
### A: Configurar Server
-Instalar express y levantar server.  

#### Entregables: 
`index.js`

### B: Router
-Configurar rutas  

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
/api/items/MLA1232323  

#### Ejercicio Participantes: 
/api/search?q="iphone"  
/app/search?q="iphone"  

#### Entregables:  
`controllers/app.controller.js`  
`controllers/api.controller.js`  

Modificar:  
`routers/router.js`  

### C: Middleware
-Crear un middleware para que cada request contengan los datos del autor del ejercicio.  
-Crear un middleware para manejo de errores.  

#### Entregables:  
`services/author.middleware.js`  
`services/errors.middleware.js`  
Modificar:   
`routers/router.js`  
`controllers/app.controller.js`  
`controllers/api.controller.js`  

### D: Handlebars
-Implementar handlebars.  
-Definir un layout.  
-Definir una page.  
-Definir un partial.  

#### Entregables:  
`views/layouts/main.hbs`  
`views/pages/index.hbs`  
`views/pages/search.hbs`  
`views/pages/error.hbs`  
`views/pages/item.hbs`  
`views/partials/breadcrumb.hbs`  
`views/partials/header.hbs`  

## Parte 3 : Mocks (Nock)
-Explicar como crear mocks.  
-Setear mocks para desarrollo.    

#### Entregables:  
`mocks/index.js`  
`mocks/search.js`  
`mocks/item.js`  
`mocks/item-description.js`  
`mocks/item-category.js`  
Modificar:  
`index.js` Agregar lógica para que use los mocks.   

## Parte 4 : Environments
Explicar como diferenciar los distintos entornos.

#### Ejercicio Participantes:   
-Que en desarrollo use los mocks.

#### Entregables:  
Modificar:  
`index.js` Agregar lógica para que use los mocks solo en desarrollo  
`package.json` Setear las variables en cada entorno.  

## Parte 5 : Unit Test (Mocha - Chai)
-Crear el test de meli.service.

#### Entregables:  
Modificar:  
`test/unit/meli.service.spec.js`   

#### Ejercicio Participantes:   
-Producción: Usar assets minificados.  
-Desarrollo: Usar assets no minificados.  

## Parte 6 : ES6 - Babel - Webpack
-Escribir en scripts código en ES6, y que el bundle generado sea ES5.
-Generar un componente de suggest, que a medida vayamos escribiendo en el searchBar nos sugiera resultados.

#### Entregables:  
`webpack.config.js`  
`assets/src/scripts/main.js`  
`assets/src/scripts/components/suggest.js`  
`assets/src/scripts/components/request.js`  
Modificar:  
`package.json`  

## Parte 7 : Test funcionales con NightWatch
#### Ejercicio Dictado:   
-Configurar el entorno para poder generar una suite de test funcionales.
-Crear test de ejemplo para el search.

#### Ejercicio Participantes:   
-Generar test que valide que funciona correctamente:  
    - Autocomplete search  
    - Página del item  

#### Entregables:  
`test/e2e/pages/HomePage.js`  
`test/e2e/pages/SearchPage.js`  
`test/e2e/globals.js`  
`test/e2e/groups/searchSpec.js`  
`test/e2e/groups/itemSpec.js`  
`nightwatch.json`  
Modificar:  
`package.json`  
