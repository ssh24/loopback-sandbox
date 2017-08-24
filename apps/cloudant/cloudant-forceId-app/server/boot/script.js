'use strict';

var util = require('util');
var _ = require('lodash');

module.exports = function(app) {
  var db = app.datasources.cloudantDs;
  var Employee = app.models.Employee;
  var Car = app.models.Car;

  db.once('connected', function() {
    db.automigrate(function(err) {
      if (err) throw err;
      console.log('\nAutomigrate completed');

      Employee.create([{
        _id: 1,
        name: 'Foo',
      }, {
        _id: 2,
        name: 'Bar',
      }, {
        _id: 3,
        name: 'Baz',
      }], function(err, result) {
        if (err) throw err;
        console.log('\nCreated employee instance: ' + util.inspect(result));

        Car.create([{
          _id: 1,
          make: 'Toyota',
        }, {
          _id: 2,
          name: 'BMW',
        }, {
          _id: 3,
          name: 'Mercedes',
        }], function(err, result) {
          if (err) throw err;
          console.log('\nCreated car instance: ' + util.inspect(result));
        });
      });
    });
  });
};
