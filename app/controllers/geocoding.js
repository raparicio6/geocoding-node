const { getGeocode } = require('../services/googleGeocoding');
const { serializeGeocodingResponse } = require('../serializers/geocoding');
const logger = require('../logger');
const errors = require('../errors');

exports.getGeocode = (req, res, next) =>
  getGeocode(req.query)
    .then(response => res.send(serializeGeocodingResponse(response)))
    .catch(error => {
      logger.error(`Could not get geocode. Error: ${error.message}`);
      return next(errors.badRequest(error.message));
    });
