const EARTH_RADIUS_IN_KM = 6371;

const degToRad = deg => deg * (Math.PI / 180);

// Haversine formula
exports.getGeometricDistanceInKm = (latOne, lonOne, latTwo, lonTwo) => {
  const latDistance = degToRad(latTwo - latOne);
  const lonDistance = degToRad(lonTwo - lonOne);
  const a =
    Math.sin(latDistance / 2) * Math.sin(latDistance / 2) +
    Math.cos(degToRad(latOne)) *
      Math.cos(degToRad(latTwo)) *
      Math.sin(lonDistance / 2) *
      Math.sin(lonDistance / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = EARTH_RADIUS_IN_KM * c;
  return distance;
};
