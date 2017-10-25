## Parte 1 : Npm Scripts

#### Dependencias:
Watchers: [onchange](https://github.com/Qard/onchange)  
Buildeo Sass: [node-sass](https://github.com/sass/node-sass), [postcss](https://github.com/postcss/postcss) (Autoprefix)  
Buildeo Imágenes: [imagemin](https://github.com/imagemin/imagemin)  
Buildeo Scripts: [uglifyjs](https://github.com/mishoo/UglifyJS)  
Utils:  
[npm-run-all](https://github.com/mysticatea/npm-run-all) (Correr varias tareas al mismo tiempo)  
[onchange](https://github.com/Qard/onchange) (Detecta cambios en directorios y ejecuta los comandos que querramos)  
[rimraf](https://github.com/isaacs/rimraf) (Utilidad para borrar directorios en todos los SO)  
[nodemon](https://nodemon.io/) (Detecta cambios en el código y reinicia server para aplicarlos)

#### Ejercicio Dictado:  
Explicar nodemon  
Explicar el buildeo de Sass, autoprefix y minificación.  
Crear un watch de Sass.  

#### Ejercicio Participantes:   
-Comprimir imágenes.  
-Compilar y minificar código JS.  
-Generar Watchers  

Tareas:  
``` 
clean
autoprefixer
scss
uglify
imagemin
build:styles
build:scripts
build:images
build
watch:styles
watch:scripts
watch:images
watch
start 
```

#### Entregables: 
`package.json`  
`assets/scr/styles/components/_layout.scss`  
`assets/scr/styles/components/_breadcrumb.scss`  
`assets/scr/styles/components/_header.scss`  
`assets/scr/styles/pages/_item.scss`  
`assets/scr/styles/pages/_index.scss`  
`assets/scr/styles/pages/_search.scss`  
`assets/scr/styles/pages/_error.scss`  
`assets/scr/styles/main.scss`  
`assets/scr/scripts/main.js`  
`assets/scr/scripts/file1.js`  
`assets/scr/scripts/file2.js`  
`assets/scr/images/test.jpg`  
