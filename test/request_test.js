'use strict';

var assert = require('assert');
var Request = require('../lib/request');

function errorHandler(err){
    process.nextTick(function rethrow() { throw err; });
}

(new Request).run(
    [], // inputs
    {
        url: 'http://code.jquery.com/jquery-2.1.0.min.js'
    }, // options
    console // logger
).then(function(inputs){
    assert.equal(inputs.length, 1)
}).catch(errorHandler)
