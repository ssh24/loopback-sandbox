'use strict';
var util = require('util');
var _ = require('lodash');

module.exports = function(app) {
  var db = app.datasources.mssqlDs;
  var Employee = app.models.Employee;

  db.automigrate(function(err) {
    if (err) throw err;
    console.log('\nAutomigrate completed');

    db.discoverModelProperties('Employee', function(err, result) {
      if (err) throw err;
      console.log('\nEmployee properties: ' + util.inspect(result));
    });
  });
};
