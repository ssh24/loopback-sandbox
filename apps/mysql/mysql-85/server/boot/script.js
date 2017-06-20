'use strict';
var util = require('util');

module.exports = function(app) {
  var db = app.dataSources.mysqlDs;
  var Employee = app.models.Employee;

  db.automigrate(function(err) {
    if (err) throw err;
    Employee.create([{name: 'Bob'}, {name: 'Sam'}], function(err, result) {
      if (err) throw err;
      console.log('\nCreated instance: ' + util.inspect(result, 4));
    });
  });
};
