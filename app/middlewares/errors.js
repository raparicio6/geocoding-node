const errors = require('../errors');
const logger = require('../logger');

const DEFAULT_STATUS_CODE = 500;

const statusCodes = {
  [errors.DEFAULT_ERROR]: 500,
  [errors.SCHEMA_ERROR]: 422
};

exports.handle = (error, req, res) => {
  if (error.origin) {
    return res.status(error.statusCode).send(error);
  }

  res.status(statusCodes[error.internalCode] || DEFAULT_STATUS_CODE);
  logger.error(error);
  return res.send({ message: error.message, internalCode: error.internalCode || errors.DEFAULT_ERROR });
};
