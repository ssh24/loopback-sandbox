'use strict';
var util = require('util');
var _ = require('lodash');

module.exports = function(app) {
  var db = app.datasources.mongoDs;
  var Business = app.models.Business;

  db.automigrate(function(err) {
    if (err) throw err;
    console.log('\nAutomigrate completed');

    Business.create([{
      id: 1,
      info: {
        name: 'Foo Business',
        moto: 'Some foo',
        owners: ['Foo'],
        location: {
          lat: 23.456,
          lng: -23.456,
        },
      },
    }, {
      id: 2,
      info: {
        name: 'Bar Business',
        moto: 'Some Bar',
        owners: ['Bar', 'Bar1'],
        location: {
          lat: 13.456,
          lng: -53.456,
        },
      },
    }], function(err, result) {
      if (err) throw err;
      console.log('\nCreated instance: %j' + util.inspect(result, {depth: 4}));

    //   Business.find({where: {'info.location.lat': {gte: 15.500}}},
    //   function(err, result) {
    //     if (err) throw err;
    //     console.log('\nFound instance with embedded filter: ' + util.inspect(result, {depth: 4}));
    //   });
      Business.find({where: {'owners[0]': 'Bar'}},
      function(err, result) {
        if (err) throw err;
        console.log('\nFound instance with embedded filter: ' + util.inspect(result, {depth: 4}));
      });
    });
  });
};
