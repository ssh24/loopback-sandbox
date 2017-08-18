'use strict';

var util = require('util');
var _ = require('lodash');

module.exports = function(app) {
  var db = app.datasources.mysqlDs;
  var Employee = app.models.Employee;

  db.automigrate(function(err, result) {
    if (err) throw err;
    console.log('\nAutomigrate complete');

    Employee.create([{
      name: 'Mr. Foo',
      age: 1,
    }, {
      name: 'mr: foo',
      age: 12,
    }, {
      name: 'Bar',
      age: 3,
    }], function(err, result) {
      if (err) throw err;
      console.log('\nCreated instance: ' + util.inspect(result));

      Employee.find({where: {name: {regexp: '^m*'}}}, function(err, result) {
        if (err) throw err;
        console.log('\nFind using regexp: ' + util.inspect(result));
      });
    });
  });
};
