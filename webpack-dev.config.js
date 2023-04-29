const Dotenv = require('dotenv-webpack');

function getConfig() {
  if (process.env.APP_ENV === 'production') {
    return '.env.production';
  } else if (process.env.APP_ENV === 'development') {
    return '.env.development';
  } else if (process.env.APP_ENV == 'staging') {
    return '.env.staging';
  } else {
    return '.env';
  }
}

module.exports = {
  plugins: [
    new Dotenv({
      path: getConfig(),
      systemvars: true
    })
  ]
};
