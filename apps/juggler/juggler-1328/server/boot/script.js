'use strict';
var util = require('util');

module.exports = function(app) {
  var db = app.dataSources.mysqlDs;
  var Accounts = app.models.Accounts;
  var Users = app.models.Users;

  var accountData = [{
    Type: 'Student - Basic',
    MinBalance: 500,
  }, {
    Type: 'Student - Intermediate',
    MinBalance: 1000,
  }, {
    Type: 'Youth',
    MinBalance: 1500,
  }, {
    Type: 'Professional',
    MinBalance: 2500,
  }];

  var userData = [{
    name: 'Foo',
    age: 1,
  }, {
    name: 'Bar',
    age: 2,
  }, {
    name: 'Baz',
    age: 4,
  }, {
    name: 'Bob',
    age: 12,
  }];

  db.automigrate(function(err) {
    if (err) throw err;
    console.log('\nAutomigrate completed.');

    
  });
};
