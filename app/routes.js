const { healthCheck } = require('./controllers/healthCheck');
const { getGeocode } = require('./controllers/geocoding');

exports.init = app => {
  app.get('/health', healthCheck);
  app.get('/geocode', getGeocode);
};
