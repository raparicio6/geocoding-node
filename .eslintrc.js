module.exports = {
  extends: ['wolox-node'],
  rules: {
    'prefer-promise-reject-errors': 'off',
    'no-mixed-operators': 'off',
    'id-length': ['error', { 'min': 1, 'max': 35 }]
  }
};
