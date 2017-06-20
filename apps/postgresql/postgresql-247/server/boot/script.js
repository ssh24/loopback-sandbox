'use strict';
var async = require('async');

module.exports = function(app) {
  var postgresDs = app.dataSources.postgresDs;
  var Expense = app.models.Expense;

  postgresDs.automigrate(function(err, result) {
    if (err) throw err;
    console.log('\nAutomigrate completed.');
    // Expense.create([
    //   {
    //     Description: 'Expense 1',
    //     Amount: 12,
    //     Stamp: '1999-01-08 12:25:00',
    //   },
    // ], function(err, result) {
    //   if (err) throw err;
    //   Expense.find({where: {Stamp: {like: '1999%'}}}, function(err, result) {
    //     if (err) throw err;
    //     console.log('Result: ' + JSON.stringify(result));
    //   });
    // });
  });
};
