exports.serializeGeocodingResponse = geocodingResponse => {
  delete geocodingResponse.status;
  return geocodingResponse;
};
