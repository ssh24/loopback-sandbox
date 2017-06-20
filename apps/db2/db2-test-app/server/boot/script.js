'use strict';
var util = require('util');

module.exports = function(app) {
  var db = app.dataSources.db2Ds;
  var Employee = app.models.Employee;

  db.automigrate(function(err) {
    if (err) throw err;
    console.log('\nAutomigrate completed');

    

    // db.connector.execute('select ? from PMR', ['CUSTNAME'], function(err, result) {
    //   if (err) throw err;
    //   console.log('\nTables: ' + util.inspect(result));

    // Employee.create([{
    //   name: 'Foo',
    //   age: 1,
    // }, {
    //   name: 'Bar',
    //   age: 2,
    // }], function(err, result) {
    //   if (err) throw err;
    //   console.log('\nCreated instance: ' + util.inspect(result));

    //   db.discoverSchema('Employee', function(err, result) {
    //     if (err) throw err;
    //     console.log('\nDiscovery for Employee: ' + util.inspect(result));
    //   });
    });
  });
};
