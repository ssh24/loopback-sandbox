'use strict';

var util = require('util');
var _ = require('lodash');

module.exports = function(app) {
  var db = app.datasources.db2ds;
  var Employee = app.models.Employee;

  db.automigrate(function(err) {
    if (err) throw err;

    console.log('\nAutomigrate completed');
  });

//   db.autoupdate(function(err) {
//     if (err) throw err;

//     console.log('\nAutoupdate complete');

//     db.connector.getTableStatus('Employee', function(err, fields, indexes, FKs) {
//       if (err) throw err;

//       console.log('\nTable status: ');
//       console.log('\nFields: ' + util.inspect(fields));
//       console.log('\nIndexes: ' + util.inspect(indexes));
//     });
//   });
};
