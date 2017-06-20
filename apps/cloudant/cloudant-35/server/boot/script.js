'use strict';
var async = require('async');
var _ = require('lodash');
var util = require('util');

var datas = [];

var dataToBeUpdated = [{'name': 'Foo-change', 'age': 11},
{'name': 'A-change', 'age': 51}];

module.exports = function(app) {
  var db = app.dataSources.cloudantDS;
  var Employee = app.models.Employee;

  db.once('connected', function() {
    db.automigrate(function(err) {
      if (err) throw err;

      Employee.create([
        {name: 'Foo', age: 1},
        {name: 'Bar', age: 1},
        {name: 'Baz', age: 2},
        {name: 'A', age: 4},
      ],
      function(err, result) {
        if (err) throw err;
        console.log('\nCreated instance: ' + util.inspect(result, 6));

        var data = {name: 'X', age: 4, rev: '2-4245'};

        Employee.updateOrCreate(data, function(err, result) {
          if (err) throw err;

          console.log('\nupdateOrCreate instance: ' + util.inspect(result, 6));

          Employee.find(function(err, result) {
            if (err) throw err;

            console.log('\nFound instance: ' + util.inspect(result, 6));
          });
        });
      });
    });
  });
};
