'use strict';
var async = require('async');

module.exports = function(app) {
  var date = new Date();
  var mysqlDs = app.dataSources.mysqlDs;
  var Message = app.models.Message;
  var Account = app.models.Account;

  mysqlDs.automigrate(function(err) {
    if (err) throw err;
    Account.create([{Type: 'Student Ax', Amount: 3465.78},
    {Type: 'Professional', Amount: 12457.89}],
    function(err, result) {
      if (err) throw err;
      console.log('\nCreate: ' + JSON.stringify(result));
      Account.updateAll({Type: 'Student Ax'},
      {Amount: 345}, function(err, result) {
        if (err) throw err;
        console.log('\nUpdate All result: ' + JSON.stringify(result));
      });
      // Account.find({where: {Type: {ilike: 'zzz%'}}}, function(err, result) {
      //   if (err) throw err;
      //   console.log('Find: ' + JSON.stringify(result));
      // });
    });
  });
};
