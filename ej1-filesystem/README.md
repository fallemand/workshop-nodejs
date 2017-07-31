## Ej1 : Modulo FS

#### Bibliografía:
[Modulo FileSystem](https://nodejs.org/api/fs.html)

#### Ejercicio Dictado:
- Sincronico: Leer archivo, quitar vocales, imprimir por consola resultado.   
- Asincronico: Leer archivo, quitar vocales, imprimir por consola resultado.

#### Ejercicio Participantes: Cambiador de palabras   
- Crear un json, que contenga:
```javascript
{ 
  "parado" : "sentado",   
  "viejas" : "nuevas",   
  "desaparecer" : "aparecer"
}
```
- Crear un archivo `sync.js`   
  - Requerir módulo `fs`   
  - Leer el archivo `replaces.json` dado con el método `fs.readFileSync` y parsearlo   
  - Leer el archivo `text.txt` dado con el método `fs.readFileSync` y reemplazar todas las keys del `json` obtenido con su respectivo valor   
  - Imprimir por pantalla el resultado de dicho reemplazo   
  - Imprimir a continuación por pantalla un texto cualquiera que muestre que la ejecución fué sincronica   
  - sar el método `fs.writeFile` para grabar el resultado del reemplazo   
- Crear un archivo `async.js`
  - Requerir módulo `fs`   
  - Leer el archivo `replaces.json` dado con el método `fs.readFile` y parsearlo   
  - En la función de callback de lectura de `.json` leer el archivo `text.txt` dado con el método `fs.readFile` y reemplazar todas las keys del `.json` obtenido con su respectivo valor   
  - En la función de callback que ejecuta el reemplazo imprimir por pantalla el resultado de dicho reemplazo   
  - Imprimir a continuación por pantalla un texto cualquiera que muestre que la ejecución fué asincronica   
  - sar el método `fs.writeFile` para grabar el resultado del reemplazo    
