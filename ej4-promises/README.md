## Ej4 : Promises
-Como se usa una promise (then - catch)   
-Como crear una promise.  

#### Bibliografía:
[Promises](https://strongloop.com/strongblog/promises-in-node-js-an-alternative-to-callbacks/)
[Promse](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Promise)

#### Ejercicio Dictado:
-Crear una función que devuelva un objeto Promise y reciba como parámetro un argumento, utilizando un timeout dentro de la misma (para mostrar que es asincrónica) y según el parámetro resolver o rejectar la misma.

#### Ejercicio Participantes:  
-Transformar el objeto `request.js` en una promise.  
-Transformar el objeto `meli.service.js` en una promise.  
Cambiar las callbacks por then y catch.  

- Crear un directorio ‘Promise’ y dentro del mismo un archivo llamado ‘index.js’.  
- Dentro del archivo ‘index.js’, creamos un objeto ‘Promise’ llamado ‘promesa’, y le pasamos una función callback al mismo con ‘resolve’ y ‘reject’ como argumentos.  
- La función callback debería tener un setTimeout de 2 segundos y dentro del mismo vamos a resolver la promesa con el método ‘resolve’ y pasandole como argumento un texto cualquiera.  
- Utilizar el objeto Promise e imprimir en la consola el resultado de la misma. Al mismo tiempo imprimir otra cosa por consola para visualizar que la promesa fue asincrónica.  
- Crear una función que retorne un objeto Promise que la mismo reciba por parámetro una condición, si la misma se cumple resolver la promesa, en caso contrario rechazarla. Hacer uso de la misma función y controlar el caso de éxito y el caso de error de la Promise.  

Una vez terminado este ejercicio, vamos a utilizar lo aprendido en el modulo de file system, y vamos a utilizar una promesa para leer un archivo, usando el método `readFileSync`
