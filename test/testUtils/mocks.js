const nock = require('nock');
const { properGetGeocodeResponse, responseWithError } = require('./schemas/googleGeocodingServiceSchemas');
const {
  common: {
    googleGeocodingApi: { baseUrl }
  }
} = require('../../config');

exports.mockGetGeocode = () =>
  nock(baseUrl)
    .get(/json*/)
    .reply(200, properGetGeocodeResponse);

exports.mockGetGeocodeWithError = (times = 1) =>
  nock(baseUrl)
    .get(/json*/)
    .times(times)
    .reply(200, responseWithError);
