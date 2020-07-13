const LOCATION_REGEX = /^(-?\d+(\.\d+)?),\s*(-?\d+(\.\d+)?)$/;

const stringInQuery = (param, { optional = true, isALocation = false } = {}) => ({
  [param]: {
    in: ['query'],
    isString: {
      errorMessage: optional ? `${param} has to be a string` : `${param} is a required string`
    },
    custom: {
      options: value => (isALocation ? value.match(LOCATION_REGEX) : true),
      errorMessage: `${param} has to be a location with the format LAT,LON`
    },
    optional
  }
});

exports.getGeocodeSchema = {
  ...stringInQuery('address'),
  ...stringInQuery('components'),
  ...stringInQuery('bounds'),
  ...stringInQuery('language'),
  ...stringInQuery('region')
};

exports.getReverseGeocodeSchema = {
  ...stringInQuery('latlng', { optional: false, isALocation: true }),
  ...stringInQuery('language'),
  ...stringInQuery('result_type'),
  ...stringInQuery('location_type')
};

exports.calculateGeometricDistanceSchema = {
  ...stringInQuery('locationOne', { optional: false, isALocation: true }),
  ...stringInQuery('locationTwo', { optional: false, isALocation: true })
};
