
## Parte 6 : Testing
### A: Tests Unitarios (Mocha)
#### Dependencias: 
[jest](https://facebook.github.io/jest/)  
```
npm install --save-dev jest babel-jest react-test-renderer
```

#### Ejercicio Dictado:   
-Configuramos los tests unitarios  
-Crear el test de `meli.service`.  
    Creamos test inicial (search debe traer resultados).  
-Creamos tests React para el `Breadcrumb.jsx` y `Suggest.jsx`  

#### Ejercicio Participantes:   
- Completar tests sobre todos los métodos del meli.service.js  
    * Que traiga la información del item, la descripción y la categoría.
    * Testear resultados suggest.  
- Crear tests para las vistas: `SearchItem.jsx` y `Layout.jsx`.

#### Entregables:  
`test/unit/services/meli.service.spec.js`  
`test/unit/views/breadcrumb.spec.js`  
`test/unit/views/suggest.spec.js`  
`test/unit/views/searchitem.spec.js`  
`test/unit/views/layout.spec.js`  
Modificar:  
`package.json`  
`.babel.rc`  

### B: Tests Funcionales (Nightwatch.js)
#### Dependencias: 
[nightwatch](http://nightwatchjs.org/)  
[selenium-standalone 5.8.0](https://github.com/vvo/selenium-standalone)  

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
