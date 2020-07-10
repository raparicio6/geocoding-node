const { healthCheck } = require('./controllers/healthCheck');
const { getGeocode, getReverseGeocode, calculateGeometricDistance } = require('./controllers/geocoding');

exports.init = app => {
  app.get('/health', healthCheck);
  app.get('/geocode', getGeocode);
  app.get('/reverse_geocode', getReverseGeocode);
  app.get('/geometric_distance', calculateGeometricDistance);
};
