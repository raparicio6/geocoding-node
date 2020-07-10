const ENVIRONMENT = process.env.NODE_ENV || 'development';
const dotenv = require('dotenv');

if (ENVIRONMENT !== 'production') dotenv.config();

const config = {
  common: {
    api: {
      bodySizeLimit: process.env.API_BODY_SIZE_LIMIT,
      parameterLimit: process.env.API_PARAMETER_LIMIT,
      port: process.env.PORT
    },
    googleGeocodingApi: {
      baseUrl: process.env.GOOGLE_GEOCODING_API_BASE_URL || 'https://maps.googleapis.com/maps/api/geocode',
      key: process.env.GOOGLE_GEOCODING_API_KEY
    }
  }
};

module.exports = config;
