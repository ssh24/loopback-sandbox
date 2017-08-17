'use strict';

var util = require('util');
var _ = require('lodash');

module.exports = function(app) {
  var db = app.datasources.mongoDs;
  var Employee = app.models.Employee;
  var id;

  db.automigrate(function(err, result) {
    if (err) throw err;
    console.log('\nAutomigrate completed');

    Employee.create([{
      name: 'Foo',
    }, {
      name: 'Bar',
    }], function(err, result) {
      if (err) throw err;
      console.log('\nCreated instance: ' + util.inspect(result));
      id = result[0].id;

      Employee.findOne({where: {id: {eq: {id}}}}, function(err, result) {
        if (err) throw err;
        console.log('\nFind one instance: ' + util.inspect(result));
      });
    });
  });
};
