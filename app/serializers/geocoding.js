exports.serializeGeocodingResponse = geocodingResponse => {
  delete geocodingResponse.status;
  return geocodingResponse;
};

exports.serializeDistance = distanceInKm => ({
  distance: {
    km: distanceInKm,
    mi: distanceInKm / 1.609344
  }
});
