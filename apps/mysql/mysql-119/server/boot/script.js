'use strict';
var assert = require('assert');
var util = require('util');
var _ = require('lodash');

module.exports = function(app) {
  var db = app.dataSources.mysqlDs;
  var League = app.models.League;

  db.automigrate(function(err) {
    if (err) throw err;
    console.log('\nAutomigrate complete');

    League.create([{
      name: 'EPL',
      teams: ['Liverpool', 'Arsenal', 'Manchester United', 'Chelsea'],
    }, {
      name: 'La Liga',
      teams: ['Barcelona', 'Real Madrid', 'Atletico Madrid'],
    }], function(err, result) {
      if (err) throw err;
      console.log('\nCreated instance: ' + util.inspect(result, 4));

      League.find(function(err, result) {
        if (err) throw err;
        console.log('\nFound instance: ' + util.inspect(result, 4));

        _.forEach(result, function(res) {
          assert(Array.isArray(res.teams));
        });
      });
    });
  });
};
