'use strict';

var util = require('util');
var _ = require('lodash');

module.exports = function(app) {
  var db = app.datasources.cloudantDs;
  var Employee = app.models.Employee;
  var id, rev;

  db.once('connected', function(err) {
    if (err) throw err;
    console.log('\nApp connected');

    db.automigrate(function(err) {
      if (err) throw err;
      console.log('\nAutomigrate completed');

      Employee.create([{
        name: 'Foo',
        age: 1,
      }, {
        name: 'Bar',
        age: 2,
      }], function(err, result) {
        if (err) throw err;
        console.log('\nCreated instance: ' + util.inspect(result));
        id = result[0].id;
        rev = result[0]._rev;

        Employee.replaceById(id, {name: 'Foo-new', _rev: rev},
        function(err, result) {
          if (err) throw err;
          console.log('\nReplaced instance: ' + util.inspect(result));
        });
      });
    });
  });
};
