## Parte 5 : ES6 - Babel - Webpack
-Escribir scripts del lado del cliente en [ES6](http://es6-features.org/), y que el bundle generado sea ES5.  
-Generar un componente de suggest, que a medida vayamos escribiendo en el search-bar nos sugiera resultados.  

#### Dependencias:
[webpack](https://github.com/webpack/webpack)  
[babel-loader](https://github.com/babel/babel-loader)  
[babel-preset-es2015](https://github.com/babel/babel/tree/master/packages/babel-preset-es2015)  
[babel-preset-react](https://babeljs.io/docs/plugins/preset-react/)  
```
npm install --save-dev webpack babel-loader babel-preset-es2015 babel-preset-react
```

#### Entregables:  
`webpack.config.js`  
`assets/src/scripts/header`  
Modificar:  
`package.json`  
`views/components/Layout.jsx`  
`views/components/Header.jsx`  
`views/components/Suggest.jsx` 
