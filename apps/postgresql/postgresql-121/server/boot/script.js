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
            id: 1,
            name: 'Foo Inc.',
            location: {
                lat: 27.456,
                lng: -23.944
            }
        }, {
            id: 2,
            name: 'Bar Inc.',
            location: {
                lat: -37.456,
                lng: 25.944
            }
        }], function(err, result) {
            if (err) throw err;
            console.log('\nCreate instance: ' + util.inspect(result));

            Business.find(function(err, result) {
                if (err) throw err;
                console.log('\nFound instance: ' + util.inspect(result));
            });
        });
    });
};
