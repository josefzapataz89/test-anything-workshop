'use strict'

// var test = require('tape')
// test('nextTick', function (t) {
//   t.plan(1)
//   process.nextTick(function () {
//     t.pass('callback called')
//   })
// })

var test = require('tape');
var repeatCallback = require(process.argv[2]);

test('repeatCallback', function (t) {
    t.plan(10);
    repeatCallback(10, function () {
        t.pass('callback called');
    })
})