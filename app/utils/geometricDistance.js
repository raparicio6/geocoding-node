const EARTH_RADIUS_IN_KM = 6371;

const degToRad = deg => deg * (Math.PI / 180);

// Haversine formula
exports.getGeometricDistanceInKm = (lat1, lon1, lat2, lon2) => {
  const latDistance = degToRad(lat2 - lat1);
  const lonDistance = degToRad(lon2 - lon1);
  const a =
    Math.sin(latDistance / 2) * Math.sin(latDistance / 2) +
    Math.cos(degToRad(lat1)) *
      Math.cos(degToRad(lat2)) *
      Math.sin(lonDistance / 2) *
      Math.sin(lonDistance / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = EARTH_RADIUS_IN_KM * c;
  return distance;
};
