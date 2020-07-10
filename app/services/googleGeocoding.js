const request = require('axios');
const {
  common: {
    googleGeocodingApi: { baseUrl, key }
  }
} = require('../../config');
const { GET } = require('../constants');

const OK_STATUS = 'OK';
const ZERO_RESULTS = 'ZERO_RESULTS';
const NO_ERROR_STATUSES = [OK_STATUS, ZERO_RESULTS];

exports.getGeocode = params => {
  const options = {
    method: GET,
    url: `${baseUrl}/json`,
    params: { ...params, key }
  };
  return request(options)
    .then(response => {
      if (!NO_ERROR_STATUSES.includes(response.data.status)) {
        return Promise.reject({ response: { data: { error_message: response.data.error_message } } });
      }

      return response.data;
    })
    .catch(error => Promise.reject({ message: error.response.data.error_message }));
};
