const production = {
  host: process.env.IP || 'localhost',
  port: process.env.port || '3000',
  useMocks: false
};

const development = {
  host: 'localhost',
  port: '3000',
  useMocks: true
};

const exportConfig = process.env.NODE_ENV === 'production' ? production : development;
module.exports = exportConfig;
