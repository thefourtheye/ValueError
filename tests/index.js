'use strict';
var expect = require('chai').expect;
var ValueError = require('../');

describe('ValueError should', function() {

  it('return a valid ValueError instance', function() {
    expect(new ValueError()).to.be.an.instanceof(ValueError);
    expect(ValueError()).to.be.an.instanceof(ValueError);
  });

  it('return a ValueError with default message being empty string', function() {

    expect(function() {
      throw ValueError();
    }).to.throw(ValueError, /^ValueError$/);

    expect(function() {
      throw new ValueError();
    }).to.throw(ValueError, /^ValueError$/);

  });

  it('return a ValueError with the message passed', function() {

    expect(function() {
      throw ValueError('Value is not correct');
    }).to.throw(ValueError, /^ValueError: Value is not correct$/);

    expect(function() {
      throw new ValueError('Value is not correct');
    }).to.throw(ValueError, /^ValueError: Value is not correct$/);

  });

  it('have name as a read-only and non-enumerable property', function() {

    expect(Object.getOwnPropertyDescriptor(ValueError('Google'), 'name')).to.deep.equal({
      'value': 'ValueError',
      'configurable': true,
      'enumerable': false,
      'writable': false
    });

    expect(Object.getOwnPropertyDescriptor(new ValueError('Google'), 'name')).to.deep.equal({
      'value': 'ValueError',
      'configurable': true,
      'enumerable': false,
      'writable': false
    });

  });

  it('have message as a writable, but non-enumerable property', function() {

    expect(Object.getOwnPropertyDescriptor(ValueError('Google'), 'message')).to.deep.equal({
      'value': 'Google',
      'configurable': true,
      'enumerable': false,
      'writable': true
    });

    expect(Object.getOwnPropertyDescriptor(new ValueError('Google'), 'message')).to.deep.equal({
      'value': 'Google',
      'configurable': true,
      'enumerable': false,
      'writable': true
    });

  });

  it('return a ValueError instance without the name `ValueError` in the stack trace', function() {

    ValueError('Google').stack.split(/\s*\n\s*/).slice(1).forEach(function(line) {
      // replace all the file name part along with the line and column numbers
      expect(line.replace(/\/.*:\d+:\d+/, '')).to.not.contain('ValueError');
    });

    new ValueError('Google').stack.split(/\s*\n\s*/).slice(1).forEach(function(line) {
      // replace all the file name part along with the line and column numbers
      expect(line.replace(/\/.*:\d+:\d+/, '')).to.not.contain('ValueError');
    });

  });

});
