'use strict';

var util = require('util');
var _ = require('lodash');

module.exports = function(app) {
  var db = app.datasources.couchDs;
  var Employee = app.models.Employee;

  db.automigrate(function(err) {
    if (err) throw err;
    console.log('\nAutomigrate complete');

    Employee.create([{
      name: 'Foo',
      age: 12,
      joined: '12/03/16',
    }, {
      name: 'Bar',
      age: 1,
    }, {
      name: 'Cas',
      age: 17,
      joined: '15/05/16',
    }], function(err, result) {
      if (err) throw err;
      console.log('\nCreated instance: ' + util.inspect(result));

      db.connector.getIndexes(function(err, result) {
        if (err) throw err;
        console.log('\nIndexes: ' + util.inspect(result, {depth: 10}));

        Employee.find({where: {name: {gt: null}}}, function(err, result) {
          if (err) throw err;
          console.log('\nFound instances: ' + util.inspect(result));
        });
      });
    });
  });
};
