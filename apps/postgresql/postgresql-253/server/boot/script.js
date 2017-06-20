'use strict';
var async = require('async');

module.exports = function(app) {
  var postgresDs = app.dataSources.postgresDs;
  var Teams = app.models.Teams;

  postgresDs.automigrate(function(err, result) {
    if (err) throw err;
    Teams.upsert({
      Name: 'Liverpool Football Club',
      Manager: 'Jurgen Klopp',
      Players: ['Phillipe Coutinho', 'Roberto Firmino', 'Adam Lallana'],
    }, function(err, result) {
      if (err) throw err;
      console.log('Result: ' + require('util').inspect(result));
    });
  });
};
