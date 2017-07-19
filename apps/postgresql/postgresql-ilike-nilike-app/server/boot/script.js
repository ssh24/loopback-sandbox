'use strict';
var util = require('util');
var _ = require('lodash');

module.exports = function(app) {
  var db = app.datasources.postgresqlDs;
  var Employee = app.models.Employee;

  db.automigrate(function(err) {
    if (err) throw err;
    console.log('\nAutomigrate completed');

    Employee.create([{
      name: 'Foo',
      title: 'Software Developer',
    }, {
      name: 'Foo Cray',
      title: 'Software Architect',
    }, {
      name: 'Bar',
      title: 'Software Developer',
    }], function(err, result) {
      if (err) throw err;
      console.log('\nCreated instance: ' + util.inspect(result));

      Employee.find({where: {title: {ilike: 'software developer'}}},
      function(err, result) {
        if (err) throw err;
        console.log('\nFound instance: ' + util.inspect(result));
      });
    });
  });
};
