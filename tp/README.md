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
`assets/scr/styles/components/_breadcrum.scss` 
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
`services/middleware.service.js`  
Modificar:
`routers/router.js`  
`controllers/app.controller.js`  
`controllers/app.controller.js`  

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
`views/partials/breadcrum.hbs`  
`views/partials/header.hbs`  

## Parte 4 : Mocks (Nock)
-Explicar como crear mocks.  
-Setear mocks para desarrollo.    

#### Entregables:  
`mocks/search.js`  
`mocks/item.js`  
`views/pages/index.hbs`  

## Parte 5 : Unit Test (Mocha - Chai)
-Crear el test de meli.service.

## Parte 6 : Environments
Explicar como diferenciar los distintos entornos.

#### Ejercicio Participantes:   
-Producción: Usar assets minificados.
-Desarrollo: Usar assets no minificados.
