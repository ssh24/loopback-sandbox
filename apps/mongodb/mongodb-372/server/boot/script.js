'use strict';
var util = require('util');

module.exports = function(app) {
  var db = app.dataSources.mongoDs;
  var Employee = app.models.Employee;

  var employees = [{name: 'Sakib', age: 11},
  {name: 'Joy', age: 22},
  {name: 'Foo', age: 33}];

  db.automigrate(function(err, result) {
    if (err) throw err;
    Employee.create(employees, function(err, result) {
      if (err) throw err;
      console.log('\nCreated employees: ' + util.inspect(result, 4));

      Employee.findOne(function(err, result) {
        if (err) throw err;
        console.log('\nFound one employee: ' + util.inspect(result, 4));

        var id = result.id;
        Employee.replaceById(id, result, function(err, result) {
          if (err) throw err;
          console.log('\nReplace by id employee: ' + util.inspect(result, 4));

          Employee.find(function(err, result) {
            if (err) throw err;
            console.log('\nFind employees: ' + util.inspect(result, 4));
          });
        });
      });
    });
  });
};
