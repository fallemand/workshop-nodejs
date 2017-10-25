
## Parte 2 : Express

### F: React
Vamos a configurar react para utilizar en las vistas.  

#### Dependencias:
[react](https://github.com/facebook/react)  
[react-dom](https://github.com/facebook/react)  
[express-react-views](https://github.com/reactjs/express-react-views)  
[prop-types](https://github.com/facebook/prop-types)  
`npm install react react-dom express-react-views prop-types --save`  

#### Ejercicio Dictado:  
-Crearemos un layout.  
-Crearemos una page  
-Haremos que la ruta `app/search?q=iphone` sea renderizada utilizando una page .jsx  

#### Ejercicio Participantes: 
Completar todas las vistas restantes.  

#### Entregables:  
`views/components/Layout.jsd`  
`views/components/Header.jsx`  
`views/components/Breadcrumb.jsx`  
`views/components/SearchItem.jsx`  
`views/components/Suggest.jsx`  
`views/Index.jsx`  
`views/Search.jsx`  
`views/Error.jsx`  
`views/Item.jsx`  
Modificar:  
`package.json`  
`index.js`  
`controllers/app.controller.js`  
`routers/app.router.js`  

#### Markup de cada componente:
**Breadcrumb:** 
```html
<ul class="breadcrumb">
    <li class="breadcrumb__element"><a href="/">Inicio</a></li>
    <li class="breadcrumb__element">Celulares y Teléfonos</li>
    <li class="breadcrumb__element">Celulares y Smartphones</li>
    <li class="breadcrumb__element">iPhone</li>
    <li class="breadcrumb__element">"iphone 6"</li>
</ul>
```

**Header:** 
```html
<div class="header__container">
  <a class="header__logo" href="/" tabindex="1">MercadoLibre - Donde compras y vendes de todo</a>
  <form class="header__search" action="/app/search" method="GET" role="search">
    <input type="text" class="header__search-input" name="q" max-length="120" tabindex="2" autocapitalize="off" autocomplete="off" autocorrect="off" spellcheck="false" placeholder="Nunca dejes de buscar" data-js="search" value="iphone 6">
    <button type="submit" class="header__search-btn" tabindex="3">
    <i class="header__search-icon"><span>Buscar</span></i>
    </button>
    <div class="header__suggest" data-js="suggest"></div>
  </form>
</div>
```

**SearchItem:** 
```html
<a class="search-item" href="/app/items/MLA672160044">
  <div class="search-item__picture">
    <img src="http://mla-s1-p.mlstatic.com/736895-MLA25705832447_062017-I.jpg" alt="Celular Libre Apple Iphone 6 Gris 32gb">
  </div>
  <div class="search-item__description">
    <span class="search-item__price">$ 14999</span>
    <i class="search-item__freeshipment"></i>
    <p class="search-item__title">Celular Libre Apple Iphone 6 Gris 32gb</p>
  </div>
  <div class="search-item__location">Capital Federal</div>
</a>
```

**Suggest:** 
```html
<ul class="suggest">
  <li class="suggest__item">iphone</li>
  <li class="suggest__item">iphone 6</li>
  <li class="suggest__item">iphone 7</li>
  <li class="suggest__item">iphone 5</li>
  <li class="suggest__item">iphone 5s</li>
  <li class="suggest__item">auriculares iphone</li>
  <li class="suggest__item">celulares iphone</li>
</ul>
```

**Error:** 
```html
<div class="error">
  <img class="error__img" src="https://www.mercadolibre.com/org-img/mkt/error/img/herramienta_es.jpg" alt="Destornillador">
  <h1 class="error__title">Detalle</h1>
  <div class="error__detail">"{\"error\":\"{\\\"message\\\":\\\"Item with id asdasdasd not found.\\\",\\\"error\\\":\\\"not_found\\\",\\\"status\\\":404,\\\"cause\\\":[]}\"}"</div>
</div>
```

**Index:** 
```html
<div class="search-hero">
	<img class="seach-hero__image" src="https://cdn1.iconfinder.com/data/icons/hawcons/32/698956-icon-111-search-128.png" alt="Buscar">
	<span class="seach-hero__title">
		Ingresa en la barra de búsqueda el producto que estas buscando!
	</span>
</div>
```

**Item:** 
```html
<div class="item">
  <div class="item__picture">
    <img src="http://mla-s1-p.mlstatic.com/953943-MLA25691799599_062017-O.jpg" alt="Apple Iphone 6 16gb En Caja Dorado Negro Plateado">
  </div>
  <div class="item__info">
    <span class="item__condition">
      Nuevo - 79 vendidos
      <i class="item__freeshipment"></i>
    </span>
    <span class="item__title">Apple Iphone 6 16gb En Caja Dorado Negro Plateado</span>
    <span class="item__price">$ 9999.99<sup>00</sup></span>
    <a class="item__buy" href="https://buyingflow.mercadolibre.com.ar/bid/confirm?item_id=MLA671453766&amp;quantity=1">Comprar</a>
  </div>
  <div class="item__description">
    <h2 class="item__description-title">Descripción del producto</h2>
    <div class="item__description-content">
      El Apple iPhone 6 sube la apuesta de Apple con una pantalla de mayor tamaño de 4.7 pulgadas protegida por un cristal ultra resistente, nuevo procesador A8, 16GB, 64GB o 128GB de almacenamiento interno, cámara trasera de 8 megapixels con flash, cámara frontal de 1.2MP, conectividad 4G LTE y iOS 8.GENERAL Red GSM 850 / 900 / 1800 / 1900 - HSDPA 850 / 900 / 1700 / 1900 / 2100 (según modelo) - LTE 1 / 2 / 3 / 4 / 5 / 7 / 8 / 13 / 17 / 18 / 19 / 20 / 25 / 26 / 28 / 29 (según modelo)
    </div>
  </div>
</div>
```

**Search:** 
```html
<Layout>
  <SearchItem />
  <SearchItem />
  <SearchItem />
</Layout>
```

