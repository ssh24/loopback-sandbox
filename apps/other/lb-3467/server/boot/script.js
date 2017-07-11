'use strict';

var util = require('util');
var _ = require('lodash');

module.exports = function(app) {
  var db = app.datasources.postgresDs;
  var Item = app.models.Item;

  db.autoupdate(function(err) {
    if (err) throw err;
    console.log('\nAutomigrate completed');

    Item.create([{
      name: 'Pen',
      price: '4.99',
    }, {
      name: 'paper',
      price: 9.99,
    }], function(err, result) {
      if (err) throw err;
      console.log('\nCreated instance: ' + util.inspect(result));

      Item.find(function(err, result) {
        if (err) throw err;
        console.log('\nFound instance: ' + util.inspect(result));
      });
    });
  });
};
