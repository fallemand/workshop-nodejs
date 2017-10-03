## Ej Requisito para el curso
Se debe realizar lo siguiente:  
-Pegarle a la api de search de mercadolibre con lo que el usuario ingrese en el input.  
`https://api.mercadolibre.com/sites/MLA/search?q=iphone7`  
-Renderizar los resultados obtenidos con el campo de resultado.  

**Aclaración:** Se entrega una base ya armada con todo el markup, los estilos y funciones js.  
Ustedes deben modificar el archivo `index.html` y `assets/scripts/main.js`   

#### Funcionalidad: 
![funcionalidad](http://g.recordit.co/643HOyHklQ.gif)

#### Atención: 
- Las llamadas deben ser asincronicas utilizando javascript. 
- En el `main.js` encontrarán la función `request(url, callback, error)` para hacer el request.  
- Los templates deben ser definidos en el index.html de la siguiente forma:  
```
<script id="entry-template" type="text/x-handlebars-template">
  <div class="entry">
    <h1>{{title}}</h1>
    <div class="body">
      {{body}}
    </div>
  </div>
</script>
```

#### Bibliografía:
[Handlebars](http://handlebarsjs.com)  
[API MercadoLibre](http://developers.mercadolibre.com/es/items-y-busquedas/)  

#### Resultado esperado:
- Tanto el breadcrumb como el item de resultado (`.search-item`) deben ser templates de Handlebards.  
- Se debe usar un helper de HandleBars para formatear el precio.  
![catalog1](https://image.prntscr.com/image/rlMakPCrQzqOJCN1O-s6pA.png)  
(El precio debe estar separado en miles por puntos, y los centavos tienen que estar más chiquitos arriba)  
