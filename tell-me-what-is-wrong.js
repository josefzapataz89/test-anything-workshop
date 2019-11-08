'use strict'

var assert = require('assert');
// assert.ok(value, message) // tests if value is truthy
// assert.equal(actual, expected, message) // ==
// assert.notEqual(actual, expected, message) // !=
// assert.deepEqual(actual, expected, message) // for comparing objects
// assert.notDeepEqual(actual, expected, message)
// assert.strictEqual(actual, expected, message) // ===
// assert.notStrictEqual(actual, expected, message) // !==

var isCoolNumber = require(process.argv[2])

assert(isCoolNumber(42));