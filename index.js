'use strict';

function createError(message) {
  Object.defineProperty(this, 'name', {
    value: 'ValueError',
    configurable: true
  });
  Object.defineProperty(this, 'message', {
    value: message === undefined ? '' : message,
    writable: true,
    configurable: true
  });
  Error.captureStackTrace(this, ValueError);
}

function ValueError(message) {
  if (this instanceof ValueError) {
    return createError.call(this, message);
  }
  return new createError(message);
}

require('util').inherits(ValueError, Error);
require('util').inherits(createError, ValueError);

module.exports = ValueError;
