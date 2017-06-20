'use strict';
var util = require('util');

module.exports = function(app) {
  var db = app.dataSources.mysqlDs;
  var Country = app.models.Country;

  db.automigrate(function(err) {
    if (err) throw err;

    Country.create({id: 1, countryName: 'USA'}, function(err, result) {
      if (err) throw err;
      console.log('\nCreated instance: ' + util.inspect(result));
      var id = result.id;
      Country.upsert({id: id, countryName: 'Bangladesh', countryCode: 'bd'}, function(err, result) {
        if (err) throw err;
        console.log('\nUpsert instance: ' + util.inspect(result));
        Country.find(function(err, result) {
          if (err) throw err;
          console.log('\nFind instance: ' + util.inspect(result));
        });
      });
    });
  });
};
