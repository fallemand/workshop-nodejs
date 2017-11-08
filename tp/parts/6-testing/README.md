
## Parte 6 : Testing
### A: Tests Unitarios (Jest)
#### Dependencias: 
[jest](https://facebook.github.io/jest/)  
```
npm install --save-dev jest babel-jest react-test-renderer
```

#### Ejercicio Dictado:   
- Configuramos los tests unitarios  
- Crear el test de `meli.service`.  
  - Creamos test para el search.
- Creamos tests React para el `Suggest.jsx` usando snapshots.  

#### Ejercicio Participantes:   
- Completar tests sobre todos los métodos del `meli.service.js`  
    * Que traiga la información del item, la descripción y la categoría.
    * Testear resultados suggest.  
- Crear tests con snapshots para las vistas: `SearchItem.jsx` y `Breadcrumb.jsx`.

#### Entregables:  
`test/unit/meli.service.spec.js`  
`test/unit/breadcrumb.spec.js`  
`test/unit/suggest.spec.js`  
`test/unit/searchitem.spec.js`  
Modificar:  
`package.json`  
`.babel.rc`  

### B: Tests Funcionales (Nightwatch.js)
#### Dependencias: 
[nightwatch](http://nightwatchjs.org/)  
[selenium-standalone](https://github.com/vvo/selenium-standalone)  

#### Ejercicio Dictado:   
-Configurar el entorno para poder generar una suite de test funcionales.  
-Crear test de ejemplo para el search.  

#### Ejercicio Participantes:   
- Generar test que valide que funciona correctamente:  
    - Suggest 
    - Página del item  

#### Entregables:  
`test/e2e/pages/HomePage.js`  
`test/e2e/pages/ItemPage.js`  
`test/e2e/pages/SearchPage.js`  
`test/e2e/globals.js`  
`test/e2e/groups/searchSpec.js`  
`test/e2e/groups/itemSpec.js`  
`nightwatch.json`  
Modificar:  
`package.json`  
