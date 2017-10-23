/**
 * Created by cuanini on 10/23/17.
 */

const middleware = (req, res, next) => {
  res.locals.author = {
    name: "Constanza Uanini",
    email: "constanza.uanini@mercadolibre.com"
  };
  next();
};

module.exports = middleware;
