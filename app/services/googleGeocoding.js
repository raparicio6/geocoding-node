const request = require('axios');
const {
  common: {
    googleGeocodingApi: { baseUrl, key }
  }
} = require('../../config');
const { GET } = require('../constants');

const OK_STATUS = 'OK';

exports.getGeocode = params => {
  const options = {
    method: GET,
    url: `${baseUrl}/json`,
    params: { ...params, key }
  };
  return request(options)
    .then(response => {
      if (response.data.status !== OK_STATUS) {
        return Promise.reject({ message: response.data.error_message });
      }

      return response.data;
    })
    .catch(error => Promise.reject({ message: error.response.data.error_message }));
};
