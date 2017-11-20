/*Middleware --> funcion de 3 parametros: request, response, next
* Cosas comunes para las diferentes rutas 
* Podes decir en que orden debe ejecutarse
* Está entre el request y el response
* EJ: que valide al user, que se meta antes de todas las llamadas, antes de algunas llamadas
* En express everything es un middleware
* Los middleware de error tienen un parametro mas: Primero el de error.
* */

module.exports = (req, res, next) => {
  res.locals.author = {
    name: 'Jess Pedernera',
    mail: 'jessica.pedernera@mercadolibre.com'
  };
  next();
};
