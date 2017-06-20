'use strict';
var util = require('util');
var _ = require('lodash');

module.exports = function(app) {
    var db = app.datasources.mongoDs;
    var Airport = app.models.Airport;
    var data = [{
        city: 'London',
        code: 'LHR',
        location: {
            lat: 27.899,
            lng: -54.834
        }
    }, {
        city: 'Toronto',
        code: 'YYZ',
        location: {
            lat: 13.456,
            lng: -24.834
        }
    }, {
        city: 'Vancouver',
        code: 'YVR',
        location: {
            lat: -17.945,
            lng: 59.033
        }
    }]

    db.automigrate(function(err) {
        if (err) throw err;
        console.log('\nAutomigrate completed');

        Airport.create(data, function(err, result) {
            if (err) throw err;
            console.log('\nCreated instance: ' + util.inspect(result));

            Airport.find({where: {'location.lat': {gte: 25.59}}}, function(err, result) {
                if (err) throw err;
                console.log('\nFound instance with latitutde greater than 25.59: ' + util.inspect(result));
            });
        });
    });
};
