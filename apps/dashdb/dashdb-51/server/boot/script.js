'use strict';

var util = require('util');
var _ = require('lodash');

module.exports = function(app) {
  var db = app.datasources.dashdbDs;
  var Employee = app.models.Employee;

  db.automigrate(function(err) {
    if (err) throw err;
    console.log('\nAutomigrate complete');

    Employee.create([{
      name: 'Foo',
      age: 1,
      taskCode: 'TSK001',
    }, {
      name: 'Bar',
      age: 2,
      taskCode: 'TSK002',
    }, {
      name: 'Baz',
      age: 3,
      taskCode: 'BFTSK001',
    }], function(err, result) {
      if (err) throw err;
      console.log('\nCreated instance: ' + util.inspect(result));

      Employee.find({where: {taskCode: {like: 'TSK%'}}}, function(err, result) {
        if (err) throw err;
        console.log('\nFound instance with like: ' + util.inspect(result));

        Employee.find({where: {taskCode: {regexp: /tsk/i}}},
            function(err, result) {
              if (err) throw err;
              console.log('\nFound instance with regexp: ' +
              util.inspect(result));

              Employee.find({where: {taskCode: {inq: ['TSK001', 'TSK002']}}}, function(err, result) {
                if (err) throw err;
                console.log('\nFound instance with inq: ' +
              util.inspect(result));
              });
            });
      });
    });
  });
};
