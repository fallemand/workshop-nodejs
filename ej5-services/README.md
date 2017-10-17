## Ej5 : Services

#### Objetivo:

-Crear un servicio que resuelva toda la interacción con la api de mercadolibre.  

#### Ejercicio Dictado:  
Explicamos como hacer promises secuenciales y paralelas.

#### Ejercicio Participantes:   
-Crear un módulo `meli.service.js` que use el objeto `request` y haga las siguientes llamadas.
  - `item(id)`: Recibe como parámetro un `id` y retorna como resultado el json con la información de ese item, incluyendo descripción y breadcrumb de categorías.  
  **endpoint item:** `https://api.mercadolibre.com/items/MLA632591345`  
  **endpoint description:** `https://api.mercadolibre.com/items/MLA632591345/description`  
  **endpoint categoría:** `https://api.mercadolibre.com/categories/MLA352542`  
  
  - `search(query)`: Recibe como parámetro una `query` y retorna como resultado el json con todos los resultados de la api de meli.    
  **endpoint search:** `https://api.mercadolibre.com/sites/MLA/search?q=iphone7`  
  
  - `suggest(query)`: Recibe como parámetro una `query` y retorna como resultado las posibles sugerencias para esa búsqueda.  
  **endpoint suggest:** `https://api.mercadolibre.com/sites/MLA/autosuggest?q=ipho`  

-Crear un módulo `meli.transform.js` con los mísmos métodos que al módulo `meli.service.js`, que se encargue de recibir el json de la api de mercadolibre, y solo devuelva los atributos que sean necesarios.  

#### Entregables: 
`meli.service.js`  
`meli.transform.js`  
