'use strict';

function ValueError(message) {

  if (this instanceof ValueError) {
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
  } else {
    return new ValueError(message);
  }
}

require('util').inherits(ValueError, Error);

module.exports = ValueError;
