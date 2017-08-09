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

        // Employee.update({id: id}, {name: 'Foo-new', _rev: rev},
        // function(err, result) {
        //   if (err) throw err;
        //   console.log('\nUpdated instance: ' + util.inspect(result));

        Employee.find(function(err, result) {
          if (err) throw err;
          console.log('\nFound instance: ' + util.inspect(result));

          var employee = new Employee(result[0]);
          var newData = _.cloneDeep(result[0]);
          newData.name = 'Foo-new';
          employee.updateAttributes(newData, function(err, result) {
            if (err) throw err;
            console.log('\nUpdate Attributes instance: ' +
            util.inspect(result));
          });
        });
        // });
      });
    });
  });
};
