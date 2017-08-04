'use strict';
var util = require('util');
var _ = require('lodash');

module.exports = function(app) {
    var db = app.datasources.postgresqlDs;
    var Car = app.models.Car;

    db.discoverSchemas('car', {owner: 'public'}, function(err, result) {
        if (err) throw err;
        console.log('\nModel schema: ' + util.inspect(result, {depth: 10}));
    });


    // db.automigrate(function(err) {
    //     if (err) throw err;
    //     console.log('\nAutomigrate completed');
    // });
};
