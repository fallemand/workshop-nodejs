# Ejercicio Final
La idea de este ejercicio es armar un mini sitio de Mercado Libre con Home, Search, Vip, página de error, y Api.
En cada parte vamos a ir agregando código que se integre al trabajo final.
- **[Site Demo](http://app-workshop.7e14.starter-us-west-2.openshiftapps.com)**

## Índice 
- [Npm Scripts](https://github.com/fallemand/workshop-nodejs/tree/master/tp#parte-1--npm-scripts) 
- [Express](https://github.com/fallemand/workshop-nodejs/tree/master/tp#parte-2--express) 
    * [Server](https://github.com/fallemand/workshop-nodejs/tree/master/tp#a-configurar-server)
    * [Routes](https://github.com/fallemand/workshop-nodejs/tree/master/tp#b-router)
    * [Controllers](https://github.com/fallemand/workshop-nodejs/tree/master/tp#c-controllers)
    * [Middleware](https://github.com/fallemand/workshop-nodejs/tree/master/tp#c-middleware)
    * [Handlebars](https://github.com/fallemand/workshop-nodejs/tree/master/tp#d-handlebars)
- [Mocks](https://github.com/fallemand/workshop-nodejs/tree/master/tp#parte-3--mocks-nock) 
- [Environments](https://github.com/fallemand/workshop-nodejs/tree/master/tp#parte-4--environments) 
- [ES6 Babel Webpack](https://github.com/fallemand/workshop-nodejs/tree/master/tp#parte-6--es6---babel---webpack) 
- [Test Funcionales](https://github.com/fallemand/workshop-nodejs/tree/master/tp#parte-7--test-funcionales-con-nightwatch) 
- [Deploy Cloud](https://github.com/fallemand/workshop-nodejs/tree/master/tp#parte-8--cloud-deploy-openshift) 

## Parte 1 : Npm Scripts

#### Dependencias:
Watchers: [onchange](https://github.com/Qard/onchange)  
Buildeo Sass: [node-sass](https://github.com/sass/node-sass), [postcss](https://github.com/postcss/postcss) (Autoprefix)  
Buildeo Imágenes: [imagemin](https://github.com/imagemin/imagemin)  
Buildeo Scripts: [uglifyjs](https://github.com/mishoo/UglifyJS)  
Utils:  
[npm-run-all](https://github.com/mysticatea/npm-run-all) (Correr varias tareas al mismo tiempo)  
[onchange](https://github.com/Qard/onchange) (Detecta cambios en directorios y ejecuta los comandos que querramos)  
[rimraf](https://github.com/isaacs/rimraf) (Utilidad para borrar directorios en todos los SO)  
[nodemon](https://nodemon.io/) (Detecta cambios en el código y reinicia server para aplicarlos)

#### Ejercicio Dictado:  
Explicar nodemon
Explicar el buildeo de Sass, autoprefix y minificación. 
Crear un watch de Sass.  

#### Ejercicio Participantes:   
-Comprimir imágenes.  
-Compilar y minificar código JS.  
-Generar Watchers  

Tareas:  
``` 
clean
autoprefixer
scss
uglify
imagemin
build:styles
build:scripts
build:images
build
watch:styles
watch:scripts
watch:images
watch
start 
```

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

#### Bibliografía:  
[Express Middlewares](http://expressjs.com/es/guide/using-middleware.html)  

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

#### Dependencias:
Watchers: [nock](https://github.com/node-nock/nock)  

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
-Test a desarrollar
    - Que traiga la información del item, la descripción y la categoría.
    - Que obtenga resultados en base al search.

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
- Generar test que valide que funciona correctamente:  
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

## Parte 8 : Cloud Deploy (OpenShift)
#### Ejercicio Dictado:   
Explicamos como deployar nuestra aplicación en un servicio cloud, y obtener una url con la demo.
- Explicamos registro en [OpenShift](https://www.openshift.com/)
- Configuramos una cuenta para que genere builds desde el repo de github
- Generamos un nuevo build
- Deployamos la aplicación

#### Ejercicio Participantes:   
- Cada uno deberá repetir los pasos del dictado y deployar la aplicación desde su branch. 

#### Entregables:  
Url productiva de su proyecto. 
