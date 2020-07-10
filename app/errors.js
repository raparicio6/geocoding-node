const internalError = (message, internalCode) => ({
  message,
  internalCode
});

exports.DEFAULT_ERROR = 'default_error';
exports.defaultError = message => internalError(message, exports.DEFAULT_ERROR);

exports.externalApiError = (statusCode, message, origin = 'External Api') => ({
  statusCode: statusCode || 500,
  message,
  origin
});

exports.SCHEMA_ERROR = 'schema_error';
exports.schemaError = message => internalError(message, exports.SCHEMA_ERROR);

exports.BAD_REQUEST = 'bad_request';
exports.badRequest = message => internalError(message, exports.BAD_REQUEST);
