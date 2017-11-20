const production = {
    host: process.env.IP,
    port: process.env.PORT,
    useMocks: false
};

const development = {
    host: 'localhost',
    port: '3000',
    useMocks: true
};

const exportConfig = process.env.NODE_ENV === 'production' ? production : development;

module.exports = exportConfig;

/* 
* Remover el pipe opcional de production y pushear cambios.
* Para deployar en Heroku:
* Primero:
* git subtree push --prefix tp heroku master
* Luego:
* git push heroku `git subtree split --prefix tp`:master --force
*/