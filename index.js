'use strict';

function ValueError(message) {
  if (this instanceof ValueError) {
    this.name = 'ValueError';
    this.message = message === undefined ? "" : message;
    Error.captureStackTrace(this, ValueError);
  } else {
    return new ValueError(message);
  }
}

Object.setPrototypeOf(ValueError.prototype, Error.prototype);

module.exports = ValueError;
