'use strict';
var async = require('async');
var _ = require('lodash');
var util = require('util');

module.exports = function(app) {
  var db = app.dataSources.cloudantDS;
  var Car = app.models.Car;

  db.automigrate(function(err) {
    if (err) throw err;
    Car.create([{Model: 'Toyota', Year: 2005}, {Model: 'Audi', Year: 2014}],
  function(err, result) {
    if (err) throw err;
    console.log('Create: ' + JSON.stringify(result));
  });
  });
};
