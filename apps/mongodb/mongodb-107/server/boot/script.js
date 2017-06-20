'use strict';
var util = require('util');

module.exports = function(app) {
  var db = app.dataSources.mongoDs;
  var Bank = app.models.Bank;

  var data = [{
    id: '1',
    name: 'TD',
    opens: {
      monday: '7:00am',
      tuesday: '7:00am',
      wednesday: '7:00am',
    },
    closes: {
      monday: '7:00pm',
      tuesday: '7:00pm',
      wednesday: '7:00pm',
    },
  }, {
    id: '2',
    name: 'BMO',
    opens: {
      monday: '9:00am',
      tuesday: '7:00am',
      wednesday: '10:00am',
    },
    closes: {
      monday: '5:00pm',
      tuesday: '7:00pm',
      wednesday: '8:00pm',
    },
  }];

  db.automigrate(function(err) {
    if (err) throw err;
    console.log('\nAutomigrate complete');

    Bank.create(data, function(err, result) {
      if (err) throw err;
      console.log('\nCreated instance: ' + util.inspect(result, 4));

      Bank.find({where: {'opens.monday': '9:00am'}},
      function(err, result) {
        if (err) throw err;
        console.log('\nFind instance: ' + util.inspect(result, 4));
      });
    });
  });
};
