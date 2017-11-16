![nodejs](https://user-images.githubusercontent.com/16105726/32727098-0b1fa8a8-c85a-11e7-9251-56540e0083dd.png)

# Workshop Node.js *(+express +react)*
Este curso esta apuntado a personas que se estan iniciando en el mundo de Node.js    
Se plantea una serie de ejercicios introductorios, y luego se avanza sobre un trabajo integrador que se va iterado y completando a medida se desarrolla el curso.  
Se busca que los asistentes obtengan una compresión completa del stack, por lo que se inicia con una carpeta vacía, y clase a clase se va agregando funcionalidad, hasta lograr un proyecto completo deployado en la nube con una url productiva.  
El proyecto incluirá módulos, servicios, middlewares, controllers, routers, ES6 en el cliente, react, mocks, test unitarios y funcionales, buildeo de assets, entre otros.  

[Resultado Final](https://github.com/fallemand/workshop-nodejs/tree/complete/tp/parts/7-cloud/resolution-react)  
[Demo](https://workshop-node.herokuapp.com/)

## Requisitos Técnicos
```NVM + Node 6.11.0```
- [RESTful Apis](http://www.andrewhavens.com/posts/20/beginners-guide-to-creating-a-rest-api/)  
- [Javascript Asicronico. Manejo de callbacks. Scopes](https://houssein.me/javascript/2016/05/10/asynchronous-javascript-callbacks.html)  
- [ECMA 6](http://blog.teamtreehouse.com/get-started-ecmascript-6) Arrow functions - Clases - const / let - Template strings
- [React](https://reactjs.org/) (Entendimiento básico, [¿Qué es? ¿Para qué se usa?](https://thinkster.io/tutorials/what-exactly-is-react)  
- [SASS](http://sass-lang.com/guide).  
- Conocimiento básico de mocks (¿Que son? ¿Para que sirven?)
- Tests (diferencias entre test funcionales y unitarios)
- [Npm](https://docs.nodejitsu.com/articles/getting-started/npm/what-is-npm/) (Manejo de dependencias en Node)

## Listado de Ejercicios
[Notas para el Instructor](https://docs.google.com/a/mercadolibre.com/document/d/1J7d2IMq4y3iUmN40U_P_lBVnjfcVfQXF7tmeSfROuWc/edit?usp=sharing)  

- [EJ Requisito](https://github.com/fallemand/workshop-nodejs/tree/master/ej0-requirement)
- [TP1-FileSystem](https://github.com/fallemand/workshop-nodejs/tree/master/ej1-filesystem)
- [TP2-Modules](https://github.com/fallemand/workshop-nodejs/tree/master/ej2-modules)
- [TP3-Request](https://github.com/fallemand/workshop-nodejs/tree/master/ej3-request)
- [TP4-Promises](https://github.com/fallemand/workshop-nodejs/tree/master/ej4-promises)
- [TP5-Services](https://github.com/fallemand/workshop-nodejs/tree/master/ej5-services)
- [Trabajo Integrador](https://github.com/fallemand/workshop-nodejs/tree/master/tp)
  * [Npm Scripts](https://github.com/fallemand/workshop-nodejs/tree/master/tp/parts/1-npm_scripts) 
  * [Express](https://github.com/fallemand/workshop-nodejs/tree/master/tp/parts/2-express) 
    - [Server](https://github.com/fallemand/workshop-nodejs/tree/master/tp/parts/2-express/a.server_b.routes#a-configurar-server)
    - [Routes](https://github.com/fallemand/workshop-nodejs/tree/master/tp/parts/2-express/a.server_b.routes#b-router)
    - [Controllers](https://github.com/fallemand/workshop-nodejs/tree/master/tp/parts/2-express/c.controllers_d.middlewares#c-controllers)
    - [Middlewares](https://github.com/fallemand/workshop-nodejs/tree/master/tp/parts/2-express/c.controllers_d.middlewares#d-middleware)
    - [Services](https://github.com/fallemand/workshop-nodejs/tree/master/tp/parts/2-express/e.services)
    - [React](https://github.com/fallemand/workshop-nodejs/tree/master/tp/parts/2-express/f.react)
  * [Mocks](https://github.com/fallemand/workshop-nodejs/tree/master/tp/parts/3-mocks) 
  * [Environments](https://github.com/fallemand/workshop-nodejs/tree/master/tp/parts/4-environments) 
  * [ES6 Babel Webpack](https://github.com/fallemand/workshop-nodejs/tree/master/tp/parts/5-webpack) 
  * [Testing](https://github.com/fallemand/workshop-nodejs/tree/master/tp/parts/6-testing) 
      - [Unitarios](https://github.com/fallemand/workshop-nodejs/blob/master/tp/parts/6-testing#a-tests-unitarios-mocha)
      - [Funcionales](https://github.com/fallemand/workshop-nodejs/blob/master/tp/parts/6-testing#b-tests-funcionales-nightwatchjs)
  * [Deploy Cloud](https://github.com/fallemand/workshop-nodejs/tree/master/tp/parts/7-cloud) 

## Mini intro
[¿Que es Node?](https://www.netconsulting.es/blog/nodejs/)  
¿Para que lo usamos en MercadoLibre? [nordic](http://nordic.ml.com/docs)  

## Diagrama de Clases
Total: 26hs

- **Clase 1:** 2hs: Introducción - Ej 1 - Ej 2
- **Clase 2:** 2hs: Ej 3 - Ej 4
- **Clase 3:** 2hs: Ej 5 - [Video Clase](https://www.youtube.com/watch?v=GFYj1PQ1r7s)
- **Clase 4:** 2hs: TP: Package.json - NPM Scripts - [Video Clase](https://www.youtube.com/watch?v=ttrVe0_C6co)
- **Clase 5:** 2hs: TP: Express: Server - Routes - Controllers - [Video Clase](https://www.youtube.com/watch?v=i9_lpj574FI)
- **Clase 6:** 2hs: TP: Express: Middlewares - Servicios - [Video Clase](https://www.youtube.com/watch?v=2MmA-1XyPEU)
- **Clase 7:** 2hs: TP: Express: React - [Video Clase](https://www.youtube.com/watch?v=eYR4GDV_CnA)
- **Clase 8:** 2hs: TP: Express: React - [Video Clase](https://www.youtube.com/watch?v=5fzSVx1rHBA) (Se corta minuto 5)
- **Clase 9:** 2hs: TP: Mocks - Environments - [Video Clase](https://www.youtube.com/watch?v=AUYbK_hdxuA)
- **Clase 10:** 2hs: TP: Webpack - React en Cliente - [Video Clase](https://www.youtube.com/watch?v=rrOHhqd37gA)
- **Clase 11:** 2hs: TP: Testing Unitario - [Video Clase](https://www.youtube.com/watch?v=2r-XrJUmwJ4) (Continúa siguiente clase)
- **Clase 12:** 2hs: TP: Testing Funcional - [Video Clase](https://www.youtube.com/watch?v=CpkaFdAzSvo)
- **Clase 13:** 2hs: TP: Deploy Cloud - [Video Clase](https://www.youtube.com/watch?v=rBwvaSti2u8) (Problemas conexión)

## Contact
```
facundo.allemand@mercadolibre.com
```

---

Made with :heart: from ```Córdoba, Argentina```  

© 2017 Mercado Libre
