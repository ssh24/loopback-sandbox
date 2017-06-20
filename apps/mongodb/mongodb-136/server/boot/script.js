'use strict';
var util = require('util');

module.exports = function(app) {
  var db = app.dataSources.mongoDs;
  var BoomAccount = app.models.BoomAccount;

  db.automigrate(function(err) {
    if (err) throw err;
    console.log('\nAutomigrate complete');

    BoomAccount.create([{
      status: 'Pending',
    }, {
      status: 'Completed',
    }], function(err, result) {
      if (err) throw err;
      console.log('\nCreated instance: ' + util.inspect(result));

      BoomAccount.find(function(err, result) {
        if (err) throw err;
        console.log('\nFound instance: ' + util.inspect(result));
      });
    });
  });
};
