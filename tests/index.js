'use strict';
var expect = require('chai').expect;
var ValueError = require('../');

describe('ValueError should', function() {

  it('return a valid ValueError instance when created as constructor function', function() {
    expect(new ValueError()).to.be.an.instanceof(ValueError);
  });

  it('return a valid ValueError instance even when NOT created as constructor function', function() {
    expect(ValueError()).to.be.an.instanceof(ValueError);
  });

  it('return a ValueError with default message being empty string', function() {
    expect(function() {
      throw ValueError();
    }).to.throw(ValueError, /^ValueError$/);
  });

  it('return a ValueError with the message passed', function() {
    expect(function() {
      throw ValueError('Value is not correct');
    }).to.throw(ValueError, /^ValueError: Value is not correct$/);
  });

  it('have name as a read-only and non-enumerable property', function() {
    var valueError = ValueError('Google');
    expect(Object.getOwnPropertyDescriptor(valueError, 'name')).to.deep.equal({
      'value': 'ValueError',
      'configurable': true,
      'enumerable': false,
      'writable': false
    });
  });

  it('have message as a writable, but non-enumerable property', function() {
    var valueError = ValueError('Google');
    expect(Object.getOwnPropertyDescriptor(valueError, 'message')).to.deep.equal({
      'value': 'Google',
      'configurable': true,
      'enumerable': false,
      'writable': true
    });
  });
});
