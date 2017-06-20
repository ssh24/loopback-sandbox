'use strict';
var util = require('util');

module.exports = function(app) {
  var db = app.dataSources.mongoDs;
  var Employee = app.models.Employee;

  var data = [{
    id: 1,
    name: 'Foo',
  }, {
    id: 2,
    name: 'Bar',
  }, {
    id: 3,
    name: 'Baz',
  }, {
    id: 4,
    name: 'Bob',
  }, {
    id: 5,
    name: 'Sam',
  }];

  db.automigrate(function(err) {
    if (err) throw err;
    console.log('\nAutomigrate complete');

    Employee.create(data, function(err, result) {
      if (err) throw err;
      console.log('\nCreated instance: ' + util.inspect(result));

      Employee.findOne(function(err, result) {
        if (err) throw err;
        console.log('\nFoundOne instance: ' + util.inspect(result));
      });
    });
  });
};
