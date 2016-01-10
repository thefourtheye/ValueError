'use strict';

function ValueError(message) {
  if (this instanceof ValueError) {
    this.name = 'ValueError';
    this.message = message === undefined ? '' : message;
    Error.captureStackTrace(this, ValueError);
  } else {
    return new ValueError(message);
  }
}

require('util').inherits(ValueError, Error);

module.exports = ValueError;
