const production = {
  host: process.env.IP,
  port: process.env.PORT,
  useMocks: false,
};

const development = {
  host: 'localhost',
  port: '3000',
  useMocks: true,
};

module.exports = process.env.NODE_ENV === 'production' ? production : development;