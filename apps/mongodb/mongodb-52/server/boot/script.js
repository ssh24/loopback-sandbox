'use strict';
var util = require('util');

module.exports = function(app) {
  var db = app.dataSources.mongoDs;
  var Employee = app.models.Employee;

  db.automigrate(function(err) {
    if (err) throw err;
    console.log('Automigrate complete');

    Employee.create([{
      id: '59460487e9532ae90c324b59',
      name: 'Bob',
    }, {
      id: '59460487e9532ae90c324b5a',
      name: 'Sam',
    }, {
      id: '420',
      name: 'Foo',
      age: 1,
    }, {
      id: '21',
      name: 'Bar',
    }], function(err, result) {
      if (err) throw err;
      console.log('\nCreated employees: ' + util.inspect(result, 4));

      Employee.find({where: {id: {inq: ['59460487e9532ae90c324b59',
        '59460487e9532ae90c324b5a']}}},
      function(err, result) {
        if (err) throw err;
        console.log('\nFound instance with inq: ' + util.inspect(result, 4));
      });
    });
  });
};
