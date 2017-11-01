## Parte 3 : Mocks (Nock)
-Vemos como generar mocks con Nock.   

#### Dependencias:
[nock](https://github.com/node-nock/nock)  

#### Ejercicio Dictado:  
-Explicamos como crear mocks para el caso del search de forma genérica, es decir, que para cualquier búsqueda, retorne los resultados del mock.  
`/sites/MLA/search?*`  

#### Ejercicio Participantes: 
-Completar los mocks de la vista del item. Para lo cual, deberán mockear 3 llamadas:  
`/items/*` -> Obtener item  
`/items/*/description` -> Obtener descripción de la publicación.  
`/categories/*` -> Obtener el path de la categoría.  

-Completar los mocks de la llamada a suggest:  
`/sites/MLA/autosuggest?*` -> Devolver sugerencias.  

#### Entregables:  
`mocks/index.js`  
`mocks/search.js`  
`mocks/item.js`  
`mocks/item-description.js`  
`mocks/item-category.js`  
Modificar:  
`index.js` Agregar lógica para que use los mocks.   
