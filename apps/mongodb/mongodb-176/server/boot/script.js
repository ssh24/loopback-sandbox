'use strict';
var util = require('util');

module.exports = function(app) {
  var db = app.dataSources.mongoDs;
  var PastEmployee = app.models.PastEmployee;

  var data = [{
    name: 'Foo',
    startDate: '2012-05-10 10:00',
    endDate: '2014-04-29 17:00',
  }, {
    name: 'Bar',
    startDate: '2010-01-05 10:00',
    endDate: '2016-08-28 17:00',
  }, {
    name: 'Baz',
    startDate: '2013-03-10 10:00',
    endDate: '2014-01-28 17:00',
  }];

  db.automigrate(function(err) {
    if (err) throw err;
    console.log('\nAutomigrate completed');

    PastEmployee.create(data, function(err, result) {
      if (err) throw err;
      console.log('\nCreated instance: ' + util.inspect(result));

      PastEmployee.find({where: {startDate:
          {between: ['2010-01-05 10:00', '2012-05-10 10:00']}}},
      function(err, result) {
        if (err) throw err;
        console.log('\nFound instance: ' + util.inspect(result));
      });
    });
  });
};
