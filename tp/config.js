const production = {
  host: 'localhost',
  port: '3000',
  useMocks: true
};

const development = {
  host: 'localhost',
  port: '3000',
  useMocks: true
};

const exportConfig = process.env.NODE_ENV === 'production' ? production : development;
module.exports = exportConfig;
