## Ej Requisito para el curso
Se debe realizar lo siguiente:
-Pegarle a la api de search de mercadolibre con lo que el usuario ingrese en el input.
`https://api.mercadolibre.com/sites/MLA/search?q=iphone7`
-Renderizar los resultados obtenidos con el campo de resultado.

#### Atención: 
- Las llamadas deben ser asincronicas utilizando javascript.
- Tanto el breadcrumb como el item de resultado (`.search-item`) deben ser templates de Handlebards.
- Los template pueden ser definidos en el index.html de la siguiente forma:
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
- Info sobre [Handlebars](http://handlebarsjs.com)

#### Bibliografía:

#### Resultado esperado:
