const { healthCheck } = require('./controllers/healthCheck');
const { getGeocode, getReverseGeocode, calculateGeometricDistance } = require('./controllers/geocoding');
const { validateSchemaAndFail } = require('./middlewares/schemaValidator');
const {
  getGeocodeSchema,
  getReverseGeocodeSchema,
  calculateGeometricDistanceSchema
} = require('./schemas/geocoding');

exports.init = app => {
  app.get('/health', healthCheck);
  app.get('/geocode', validateSchemaAndFail(getGeocodeSchema), getGeocode);
  app.get('/reverse_geocode', validateSchemaAndFail(getReverseGeocodeSchema), getReverseGeocode);
  app.get(
    '/geometric_distance',
    validateSchemaAndFail(calculateGeometricDistanceSchema),
    calculateGeometricDistance
  );
};
