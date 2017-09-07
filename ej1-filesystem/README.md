## Ej1 : Modulo FS

#### Bibliografía:
[Modulo FileSystem](https://nodejs.org/api/fs.html)

#### Ejercicio Dictado:
- Sincronico: Leer archivo, quitar vocales, imprimir por consola resultado.   
- Asincronico: Leer archivo, quitar vocales, imprimir por consola resultado.

#### Ejercicio Participantes: Cambiador de palabras   

- Crear un archivo `keys.json`
- Crear un archivo `index-async.js`
- Importar el módulo de File System
- Usar `readFile` para leer el archivo de texto a procesar
- En la función de callback reemplazar el texto con las keys por su valor
- Usar `writeFile` para reemplazar el texto con las palabras nuevas
- Manejar el error si existe en cualquier caso


-Crear un json, que contenga:
```javascript
{ 
  "malo" : "bueno",   
  "dormido" : "despierto",   
  "pelado" : "peludo"
}
```
Leer un archivo, ejecutar todas las modificaciones, grabar un archivo y mostrar en pantalla.
Hacerlo primero sincrónico y luego asincronico.
