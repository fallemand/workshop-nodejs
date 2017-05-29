# Workshop Node.js
Listado de ejercicios a desarrollar en el Workshop de Node.js

## Configurando el entorno.
Sublime Modulos:
EditorConfig
Sass
Handlebars
NodeJs

## Mini intro
¿Que es Node?
¿Para que lo usamos en MercadoLibre?
Como bajaron los tiempos de apps usando Nordic

## Ej1 : Modulo FS
Ejercicio Dictado:
- Sincronico: Leer archivo, quitar vocales, imprimir por consola resultado.
- Asincronico: Leer archivo, quitar vocales, imprimir por consola resultado.

Ejercicio Participantes: Cambiador de palabras
-Crear un json, que contenga:
```{ 
  "palabra-a-cambiar" : "resultado",
  "palabra-a-cambiar" : "resultado",
  "palabra-a-cambiar" : "resultado"
}```
-Leer un archivo, ejecutar todas las modificaciones, grabar un archivo y mostrar en pantalla.
Hacerlo primero sincrónico y luego asincronico.

## Ej2 : Módulos
Ejercicio Dictado:
Crear un Módulo replacer
Reemplazar vocales
Reemplazar consonantes

Ejercicio Participantes: Calculadora.
Crear una calculadora con los métodos.
Sumar(a, b)
Restar(a, b)
Multiplicar(a, b)
Dividir(a, b)

## Ej3 : Request
-Crear un módulo que permita hacer requests.

Ejercicio Participantes: 
-Crear módulo
-Pegarle a la api de mercadolibre.
-Imprimir json respuesta.

## Ej4 : Promises
-Como se usa una promise (then - catch)
-Como crear una promise.

Ejercicio Participantes: 
Transformar el objeto request en una promise.
Cambiar las callbacks por then y catch.

## Ej5 : Npm Scripts
Ejercicio Dictado:
Explicar el buildeo de Sass, autoprefix y minificación. 
Crear un watch de Sass.

Ejercicio Participantes: 
-Comprimir imágenes.
-Compilar y minificar código JS.
-Generar Watchers

## Ej6 : Express
### Parte A: Configurar Server
-Instalar express y levantar server.

### Parte B: Configurar Server
-Configurar rutas
/app/items/MLA1232323
/app/items?q="iphone"

/api/items/MLA1232323
/api/items?q="iphone"

Entregables:
api.router.js
app.router.js
router.js

### Parte C: Middleware
-Crear un middleware para que cada request contengan los datos del autor del ejercicio.
-Crear un middleware para manejo de errores.

### Parte D: Handlebars
-Implementar handlebars.
-Definir un layout.
-Definir una page.
-Definir un partial.

## Ej8 : Crear meli.service
-Levantar un server.
-Pegarle a la api de mercadolibre

## Ej9 : Unit test - Nock
-Crear el test de meli.service.
