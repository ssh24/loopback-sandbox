'use strict';
var util = require('util');
var _ = require('lodash');

module.exports = function(app) {
    var db = app.datasources.postgresqlDs;
    var Business = app.models.Business;

    db.automigrate(function(err) {
        if (err) throw err;
        console.log('\nAutomigrate completed');
        
        Business.create([{
            name: 'Foo Inc.',
            location: {
                lng: -23.456,
                lat: 25.134
            }
        }, {
            name: 'Bar Inc.',
            location: {
                lng: 34.234,
                lat: -15.331
            }
        }], function(err, result) {
            if (err) throw err;
            console.log('\nCreated instance: ' + util.inspect(result));

            var location = result[0].location;

            console.log('\nLocation: ' + location);

            Business.find({where: {location: result[0].location}}, function(err, result) {
                    if (err) throw err;
                    console.log('\nFound instance: ' + util.inspect(result));
                });
        })
    });
};
