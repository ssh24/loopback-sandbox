'use strict';
var util = require('util');

module.exports = function(app) {
  var db = app.dataSources.mysqlDs;
  var Employee = app.models.Employee;

  db.automigrate(function(err) {
    if (err) throw err;

    Employee.create([{
      name: 'Foo',
      age: 1,
    }, {
      name: 'Foo',
      age: 2,
    }, {
      name: 'Baz',
      age: 3,
    }], function(err, result) {
      if (err) throw err;
      console.log('\nCreated instance: ' + util.inspect(result));

      Employee.findOne({where: {name: {eq: 'Foo'}}}, function(err, result) {
        if (err) throw err;
        console.log('\nFound one instance: ' + util.inspect(result));
      });
    });
  });
};
