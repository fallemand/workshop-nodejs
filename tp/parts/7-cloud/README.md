## Parte 7 : Cloud Deploy (Heroku)
#### Ejercicio Dictado:   
Explicamos como deployar nuestra aplicación en un servicio cloud, y obtener una url con la demo.
- Explicamos el uso de [pm2](http://pm2.keymetrics.io/). Modificamos la tarea `npm run start`.
- Revisamos dependencies vs devDependencies: Heroku solo instalará las dependencies.  
- Generamos un archivo `config.js`, donde seteamos el host, port, etc por entorno.
- Explicamos registro en [Heroku](https://heroku.com/)
- Deployamos la aplicación

```
npm install --save pm2
```
#### Ejercicio Participantes:   
- Cada uno deberá repetir los pasos del dictado y deployar la aplicación desde su branch. 

#### Entregables:  
-`config.js`  
-`url demo`   
**Modificar:**   
-`app.controller.js` : Cambiar host y port por el de la config.  
-`index.js` : Cambiar host y port por el de la config.  

#### Pasos:
1- **Registrarse en [Heroku](https://signup.heroku.com/login)**  
2- **Crear una nueva aplicación**  
3- **Instralar el [heroku cli](https://devcenter.heroku.com/articles/heroku-cli#download-and-install)**    
4- **Login** 
```
heroku login
```
5- **Agregar remote heroku** Cambiar el valor de -a por el nombre de su aplicación
```
cd workshop-nodejs 
heroku git:remote -a workshop-fallemand
```
6- **Pushear cambios**  
Pushear carpeta `tp` como root de otro branch:
```
git subtree push --prefix tp heroku master
```
Si no les permite pushear pueden hacerlo con --force:
```
git push heroku `git subtree split --prefix tp`:master --force
```
