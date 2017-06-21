'use strict';

var util = require('util');
var _ = require('lodash');

module.exports = function(app) {
  var db = app.datasources.cloudantDs;
  var Employee = app.models.Employee;
  var SimpleEmployee = app.models.SimpleEmployee;

  db.once('connected', function() {
    db.automigrate(function(err) {
      if (err) throw err;
      console.log('\nAutomigrate completed');

      Employee.create([{
        id: 1,
        name: 'Foo',
      }, {
        id: 2,
        name: 'Bar',
      }], function(err, result) {
        if (err) throw err;
        console.log('\nCreated employee instance: ' + util.inspect(result));

        SimpleEmployee.create([{
          id: 1,
          name: 'Foo-simple',
        }, {
          id: 2,
          name: 'Bar-simple',
        }], function(err, result) {
          if (err) throw err;
          console.log('\nCreated simple employee instance: ' + util.inspect(result));
        });
      });
    });
  });
};
