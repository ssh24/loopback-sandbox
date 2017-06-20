'use strict';
var async = require('async');

module.exports = function(app) {
    var date = new Date();
    //console.log('Current date: ' + date.toString());
    //data sources
    var mysqlDs = app.dataSources.mysqlDs;
    var Orders = app.models.Orders;
    var Scores = app.models.Scores;
    //   Orders.create([{
    //     name: 'second',
    //     createdat: date.toString()
    //   }]);

    // Scores.find(function(err, result) {
    //     if(err) throw err;
    //     console.log('Scores result: ' + JSON.stringify(result));
    // });

    Orders.find(function(err, result) {
        if(err) throw err;
        console.log('Orders Result: ' + JSON.stringify(result));
        var secondDate = result[2].createdat;

        console.log('second date: ' + secondDate);

       var newDate = new Date(secondDate);
       console.log('New date: ' + newDate);
    });

    // Orders.upsert({name: 'third', createdat: date.toString()}, function(err, result) {
    //     if(err) throw err;
    //     console.log('Upserted result: ' + JSON.stringify(result));
    // });
  }

// mysql date 