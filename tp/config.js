// Config for Heroku.
const production = {
  host: process.env.IP,
  port: process.env.PORT,
  useMocks: false,
};

const stage = {
  host: 'localhost',
  port: 3000,
  useMocks: false,
};

const development = {
  host: 'localhost',
  port: 3000,
  useMocks: true,
};

const config = (process.env.NODE_ENV === 'production')
                ? production
                : (process.env.NODE_ENV === 'stage')
                  ? stage
                  : development;

module.exports = config;
