'use strict'

/**
 * Here is an example how to test the last function with tape
 */
// var test = require('tape')
// var isCoolNumber = require('./cool.js')

// test('isCoolNumber accepts only cool numbers', function (t) {
//   t.ok(isCoolNumber(42), '42 should be cool')
//   t.end()
// })

var test = require('tape');
var fancify = require(process.argv[2]);

test('fancify', function (t) {
    t.equal(fancify('Hello'), '~*~Hello~*~', 'Wraps a string in ~*~')
    t.equal(fancify('Hello', true), '~*~HELLO~*~', 'Optionally makes it allcaps')
    t.equal(fancify('Hello', false, '!'), '~!~Hello~!~', 'Optionally allows to set the character')
    t.end()
});

/**
 * Official solution
 */
// var test = require('tape')
// var fancify = require(process.argv[2])

// test('fancify', function (t) {
//   t.equal(fancify('Wat'), '~*~Wat~*~', 'Wraps a string in ~*~')
//   t.equal(fancify('Wat', true), '~*~WAT~*~', 'Optionally makes it allcaps')
//   t.equal(fancify('Wat', false, '%'), '~%~Wat~%~', 'Optionally allows to set the character')
//   t.end()
// })