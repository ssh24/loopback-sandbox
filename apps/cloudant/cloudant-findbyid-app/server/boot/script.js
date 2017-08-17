'use strict';

var util = require('util');
var _ = require('lodash');

module.exports = function(app) {
  var db = app.datasources.cloudantDs;
  var Employee = app.models.Employee;
  var id;

  db.once('connected', function(err) {
    if (err) throw err;
    console.log('\nApp is connected');

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
        id = 'some id';

        Employee.findOne({where: {id: id}}, function(err, result) {
          if (err) throw err;
          console.log('\nFound by id: ' + util.inspect(result));
        });

        // db.connector.findById('Employee', id, {}, function(err, result) {
        //   if (err) throw err;
        //   console.log('\nFound by id: ' + util.inspect(result));
        // });
      });
    });
  });
};
