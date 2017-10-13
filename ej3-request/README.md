## Ej3 : Request

#### Bibliografía:
[Modulo http](https://nodejs.org/api/http.html#http_http_get_options_callback)

#### Objetivo:
-Crear un módulo que permita hacer requests.

#### Ejercicio Dictado:  
Explicar como generar una request a la API de Mercado Libre e imprimir por consola el resultado.

- Para comenzar vamos a requerir el modulo https, con el cuál vamos a generar un request.
- Vamos a crear un objeto `options` con el cual vamos a configurar el hostname, path, method (GET, POST, PUT, DELETE, PATCH) y los headers si son necesarios, en este caso vamos a usar un `Content-Type: application/json`
- Vamos usar la función `request` del módulo https, la cuál recibe como parametros un objeto de configuración (en nuestro caso es `options` y una función de callback para procesar la respuesta de la misma.
- La función de callback, recibe como parámetro un 'Readable Stream', el mismo emite eventos 'data' cada vez que una porción de datos llega. Para leer los mismos vamos a hacerlo escuchando el evento 'data' (request.on('data', callback), y en el callback vamos a ir uniendo estos pedazos o porciones de respuesta. El mismo stream, emite un evento 'end' que indica que ya termino de recibir toda la información, por lo que vamos a agregar un listener para ese evento asi sabemos cuando termina de recibir la información y tengamos que imprimirla.

#### Ejercicio Participantes:   
-Crear módulo para hacer `request`.   
-Imprimir json respuesta.  

#### Entregables: 
`request.js`  
