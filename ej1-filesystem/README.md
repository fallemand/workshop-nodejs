## Ej1 : Modulo FS

#### Bibliografía:
[Modulo FileSystem](https://nodejs.org/api/fs.html)

#### Descripción Ejercicio:
Leer archivos con el módulo fs de node, explicar la diferencia entre lectura  sincrónica y asincrónica.

#### Ejercicio Dictado:
- Sincronico: Leer archivo, quitar vocales, imprimir por consola resultado.   
- Asincronico: Leer archivo, quitar vocales, imprimir por consola resultado.

#### Pasos A Seguir:
- Crear un directorio para este ejercicio y dentro de el un archivo llamado index.js.
- Crear un archivo sobre el mismo directorio llamado text.txt.
- Dentro del archivo index.js hacer un require del módulo fs.
  Usar fs.readFileSync, formateando el texto directamente en utf8 con el parámetro de configuración.
  Hacer un replace del texto con una expresión regular e imprimir el texto.
  Imprimir algo en consola a continuación que muestre que el proceso es sincrónico.
  Usar fs.readFile, formateando el texto en utf8 con el parámetro de configuración, hacer un replace sobre el texto e imprimirlo.
  Imprimir algo en consola a continuación para mostrar que el proceso es asincrónico.

#### Ejercicio Participantes: Cambiador de palabras   
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
