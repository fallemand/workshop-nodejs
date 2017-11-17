const production = {
  host: 'localhost', //process.env.IP,
  port: '3333', //process.env.PORT,
  useMocks: false,
};

const development = {
  host: 'localhost',
  port: '3333',
  useMocks: true,
};

const exportConfig = process.env.NODE_ENV === 'production' ? production : development;

module.exports = exportConfig;
