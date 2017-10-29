
## Parte 2 : Express

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
