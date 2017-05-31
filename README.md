# Workshop Node.js
Listado de ejercicios a desarrollar en el Workshop de Node.js

## Configurando el entorno.
Sublime Modulos:
EditorConfig
Sass
Handlebars
NodeJs

## Mini intro
¿Que es Node?   
¿Para que lo usamos en MercadoLibre?   
Como bajaron los tiempos de apps usando Nordic   

## Ej1 : Modulo FS
#### Ejercicio Dictado:
- Sincronico: Leer archivo, quitar vocales, imprimir por consola resultado.   
- Asincronico: Leer archivo, quitar vocales, imprimir por consola resultado.   

#### Ejercicio Participantes: Cambiador de palabras   
-Crear un json, que contenga:
```javascript
{ 
  "palabra-a-cambiar" : "resultado",   
  "palabra-a-cambiar" : "resultado",   
  "palabra-a-cambiar" : "resultado"   
}
```
Leer un archivo, ejecutar todas las modificaciones, grabar un archivo y mostrar en pantalla.
Hacerlo primero sincrónico y luego asincronico.

## Ej2 : Módulos
#### Ejercicio Dictado:
Crear un Módulo replacer  
Reemplazar vocales  
Reemplazar consonantes  

#### Ejercicio Participantes: Calculadora.  
Crear una calculadora con los métodos.   
`Sumar(a, b)`  
`Restar(a, b)`  
`Multiplicar(a, b)`  
`Dividir(a, b)`  

## Ej3 : Request
-Crear un módulo que permita hacer requests.

#### Ejercicio Participantes:   
-Crear módulo para hacer `request`.  
-Crear un módulo `meli.service.js` que use el objeto `request` y haga las llamadas a item y search.  
-Imprimir json respuesta.  

#### Entregables: 
`request.js`  
`meli.service.js`

## Ej4 : Promises
-Como se usa una promise (then - catch)   
-Como crear una promise.  

#### Ejercicio Dictado:
Pensar ejercicio promises. 

#### Ejercicio Participantes:  
-Transformar el objeto `request.js` en una promise.  
-Transformar el objeto `meli.service.js` en una promise.  
Cambiar las callbacks por then y catch.  

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

## Parte 5 : Environments
Explicar como diferenciar los distintos entornos.

#### Ejercicio Participantes:   
-Producción: Usar assets minificados.
-Desarrollo: Usar assets no minificados.
