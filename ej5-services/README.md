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

**item:**  
```
{
  "id": "MLA654671115",
  "title": "Iphone 7 256gb Gold Y Rose Nuevos Libres 4g Devotostore",
  "price": {
  "amount": 17899,
  "currency": "ARS"
  },
  "condition": "new",
  "sold_quantity": 16,
  "free_shipping": false,
  "picture": "http://mla-s2-p.mlstatic.com/993111-MLA25605929559_052017-O.jpg",
  "category": [{}, {}, {}],
  "description": "<p>...</p>"
}
```

**search:**  
```
{
  "query": "iphone",
  "paging": {},
  "category": [{}, {}, {}],
  "results": [
    {
      "id": "MLA672160044",
      "title": "Celular Libre Apple Iphone 6 Gris 32gb",
      "address": {
        "state_id": "AR-C",
        "state_name": "Capital Federal",
        "city_id": "TUxBQkNIQTM5NjBa",
        "city_name": "Chacarita"
      },
      "price": {
        "amount": 14999,
        "currency": "ARS"
      },
      "condition": "new",
      "free_shipping": false,
      "thumbnail": "http://mla-s1-p.mlstatic.com/736895-MLA25705832447_062017-I.jpg"
    }
  ]
}
```

**suggest:**  
```
{
  "query": "iphone",
  "results": [
    "iphone",
    "iphone 6",
    "iphone 7",
    "iphone 5",
    "iphone 5s",
    "auriculares iphone",
    "celulares iphone"
  ]
}
```

#### Entregables: 
`meli.service.js`  
`meli.transform.js`  
