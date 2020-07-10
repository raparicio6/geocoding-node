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
  const { coordinate1, coordinate2 } = req.query;
  const [latitude1, longitude1] = getLatitudeAndLongitude(coordinate1);
  const [latitude2, longitude2] = getLatitudeAndLongitude(coordinate2);
  const distanceInKm = getGeometricDistanceInKm(latitude1, longitude1, latitude2, longitude2);
  return res.send(serializeDistance(distanceInKm));
};
