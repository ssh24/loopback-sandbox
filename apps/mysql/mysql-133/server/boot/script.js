'use strict';
var assert = require('assert');
var util = require('util');
var _ = require('lodash');

module.exports = function(app) {
  var db = app.dataSources.mysqlDs;

  db.automigrate(function(err) {
    if (err) throw err;
    console.log('\nAutomigrate complete');
  });
};
