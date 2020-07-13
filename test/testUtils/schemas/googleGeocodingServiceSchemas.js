exports.properGetGeocodeResponse = {
  status: 'OK',
  results: [
    {
      address_components: [
        { long_name: '1600', short_name: '1600', types: ['street_number'] },
        { long_name: 'Amphitheatre Parkway', short_name: 'Amphitheatre Pkwy', types: ['route'] },
        { long_name: 'Mountain View', short_name: 'Mountain View', types: ['locality', 'political'] },
        {
          long_name: 'Santa Clara County',
          short_name: 'Santa Clara County',
          types: ['administrative_area_level_2', 'political']
        },
        { long_name: 'California', short_name: 'CA', types: ['administrative_area_level_1', 'political'] },
        { long_name: 'United States', short_name: 'US', types: ['country', 'political'] },
        { long_name: '94043', short_name: '94043', types: ['postal_code'] }
      ],
      formatted_address: '1600 Amphitheatre Pkwy, Mountain View, CA 94043, USA',
      geometry: {
        location: { lat: 37.4220579, lng: -122.0840897 },
        location_type: 'ROOFTOP',
        viewport: {
          northeast: { lat: 37.42340688029149, lng: -122.0827407197085 },
          southwest: { lat: 37.4207089197085, lng: -122.0854386802915 }
        }
      },
      place_id: 'ChIJtYuu0V25j4ARwu5e4wwRYgE',
      plus_code: { compound_code: 'CWC8+R9 Mountain View, CA, USA', global_code: '849VCWC8+R9' },
      types: ['street_address']
    }
  ]
};

exports.responseWithError = {
  status: 'INVALID_KEY',
  results: [],
  error_message: 'Invalid api key'
};
