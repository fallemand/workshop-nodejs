const production = {
  host: process.env.IP || 'localhost',
  port: process.env.PORT || '3000',
  useMocks: false,
};

const development = {
  host: '0.0.0.0',
  port: '3000',
  useMocks: true,
};

module.exports = process.env.NODE_ENV === 'production' ? production : development;
