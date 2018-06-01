'use strict';

require('babel-register')({
    presets: [ 'env' ]
});

require('babel-polyfill');

module.exports = require('./src/app');
