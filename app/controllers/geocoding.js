const { getGeocode } = require('../services/googleGeocoding');
const { serializeGeocodingResponse, serializeDistance } = require('../serializers/geocoding');
const logger = require('../logger');
const errors = require('../errors');
const { getGeometricDistanceInKm } = require('../utils/geometricDistance');

const genericGetGeocode = (req, res, next) =>
  getGeocode(req.query)
    .then(response => res.send(serializeGeocodingResponse(response)))
    .catch(error => {
      logger.error(`Could not get geocode. Error: ${error.message}`);
      return next(errors.badRequest(error.message));
    });

exports.getGeocode = (req, res, next) => {
  if (!req.query.address && !req.query.components) {
    return next(errors.schemaError('address or components required'));
  }

  return genericGetGeocode(req, res, next);
};

exports.getReverseGeocode = genericGetGeocode;

const getLatitudeAndLongitude = coordinate => coordinate.split(',').map(point => parseFloat(point.trim()));

exports.calculateGeometricDistance = (req, res) => {
  const { locationOne, locationTwo } = req.query;
  const [latitudeOne, longitudeOne] = getLatitudeAndLongitude(locationOne);
  const [latitudeTwo, longitudeTwo] = getLatitudeAndLongitude(locationTwo);
  const distanceInKm = getGeometricDistanceInKm(latitudeOne, longitudeOne, latitudeTwo, longitudeTwo);
  return res.send(serializeDistance(distanceInKm));
};
