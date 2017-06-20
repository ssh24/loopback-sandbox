'use strict';
var util = require('util');

module.exports = function(app) {
  var db = app.dataSources.mongoDs;
  var Car = app.models.Car;

  db.automigrate(function(err) {
    if (err) throw err;

    console.log('\nAutomigrate complete.');

    Car.create([{
      Make: 'Toyota',
      Model: 'Corolla',
      Year: 2012,
    }, {
      Make: 'BMW',
      Model: 'X3',
      Year: 2009,
    }, {
      Make: 'Honda',
      Model: 'CRV',
      Year: 2014,
    }], function(err, result) {
      if (err) throw err;
      console.log('\nCreated instance: ' + util.inspect(result, 4));

      Car.find(function(err, result) {
        if (err) throw err;
        console.log('\nFound instance: ' + util.inspect(result, 4));

        var id1 = result[0].id;
        var id2 = result[1].id;
        var id3 = result[2].id;

        Car.find({where: {and: [{id: {gt: id1}}, {id: {lte: id3}}]}},
        function(err, result) {
          if (err) throw err;
          console.log('\nFound instance with gt/lte: ' + util.inspect(result, 4));
        });
      });
    });
  });
};
