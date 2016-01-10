'use strict';

function ValueError(message) {
  this.name = 'ValueError';
  this.message = message;
  Error.captureStackTrace(this, ValueError);
}

Object.setPrototypeOf(ValueError.prototype, Error.prototype);

module.exports = ValueError;
