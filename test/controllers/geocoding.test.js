const request = require('supertest');
const app = require('../../app');
const { properGetGeocodeResponse } = require('../testUtils/schemas/googleGeocodingServiceSchemas');
const { mockGetGeocode, mockGetGeocodeWithError } = require('../testUtils/mocks');
const { getGeometricDistanceInKm } = require('../../app/utils/geometricDistance');

describe('GET /geocode', () => {
  describe('Successful response', () => {
    let response = null;
    beforeAll(async done => {
      mockGetGeocode();
      response = await request(app)
        .get('/geocode')
        .query({ address: '1600+Amphitheatre+Parkway,+Mountain+View,+CA' });
      return done();
    });

    it('status is 200', () => {
      expect(response.status).toBe(200);
    });
    it('response has geocode schema', () => {
      delete properGetGeocodeResponse.status;
      expect(response.body).toMatchObject(properGetGeocodeResponse);
    });
  });

  describe('Google Geocoding service respond with error, respond with error', () => {
    let response = null;
    beforeAll(async done => {
      mockGetGeocodeWithError();
      response = await request(app)
        .get('/geocode')
        .query({ address: '1600+Amphitheatre+Parkway,+Mountain+View,+CA' });
      return done();
    });

    it('status is 400', () => {
      expect(response.status).toBe(400);
    });
    it('message is Invalid api key', () => {
      expect(response.body.message).toBe('Invalid api key');
    });
    it('internalCode is bad_request', () => {
      expect(response.body.internalCode).toBe('bad_request');
    });
  });

  describe('no query param respond with error', () => {
    let response = null;
    beforeAll(async done => {
      mockGetGeocodeWithError();
      response = await request(app).get('/geocode');
      return done();
    });

    it('status is 422', () => {
      expect(response.status).toBe(422);
    });
    it('message is address or components required', () => {
      expect(response.body.message).toBe('address or components required');
    });
    it('internalCode is schema_error', () => {
      expect(response.body.internalCode).toBe('schema_error');
    });
  });
});

describe('GET /geometric_distance', () => {
  describe('Successful response', () => {
    let response = null;
    const latOne = 12.1;
    const lonOne = 13;
    const latTwo = 22.6;
    const lonTwo = 98.123131;
    beforeAll(async done => {
      response = await request(app)
        .get('/geometric_distance')
        .query({ locationOne: `${latOne},${lonOne}`, locationTwo: `${latTwo},${lonTwo}` });
      return done();
    });

    it('status is 200', () => {
      expect(response.status).toBe(200);
    });
    it('response has geocode schema', () => {
      const distanceInKm = getGeometricDistanceInKm(latOne, lonOne, latTwo, lonTwo);
      const distanceInMi = distanceInKm / 1.609344;
      expect(response.body).toMatchObject({ distance: { km: distanceInKm, mi: distanceInMi } });
    });
  });
});
