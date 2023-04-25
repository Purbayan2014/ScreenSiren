const Dotenv = require('dotenv-webpack');

module.exports = {
  plugins: [
    new Dotenv({
      path: getConfig(),
      systemvars: true
    })
  ]
};
