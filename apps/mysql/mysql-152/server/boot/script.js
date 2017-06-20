'use strict';
var async = require('async');

module.exports = function(app) {
  var mysqlDs = app.dataSources.mysqlDs;
  var Employee = app.models.Employee;
  mysqlDs.autoupdate(function(err) {
    if (err) throw err;
    console.log('Auto migrate completed.');
  });
};
