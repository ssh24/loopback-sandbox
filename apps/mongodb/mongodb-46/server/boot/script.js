'use strict';
var util = require('util');

module.exports = function(app) {
  var db = app.dataSources.mongoDs;
  var Employee = app.models.Employee;
  var Job = app.models.Job;

  var employees = [{eId: '1', name: 'Sakib', age: 11},
  {eId: '2', name: 'Joy', age: 22},
  {eId: '3', name: 'Foo', age: 33}];

  var jobs = [{
    jobId: 1,
    jobName: 'job1',
  }, {
    jobId: 2,
    jobName: 'job2',
  }, {
    jobId: 3,
    jobName: 'job3',
  }, {
    jobId: 4,
    jobName: 'job4',
  }, {
    jobId: 5,
    jobName: 'job5',
  }];

  db.automigrate(function(err) {
    if (err) throw err;
    Job.create(jobs, function(err, result) {
      if (err) throw err;
      console.log('\nCreated jobs: ' + JSON.stringify(result, 4));

      employees[0].jobId = result[0].jobId;
      employees[1].jobId = result[0].jobId;

      Employee.create([employees[0], employees[1]], function(err, result) {
        if (err) throw err;
        console.log('\nCreated employees: ' + util.inspect(result, 4));
      });
    });
  });
};
