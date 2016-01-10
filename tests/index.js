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

});
