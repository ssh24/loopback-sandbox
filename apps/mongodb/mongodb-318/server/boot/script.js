'use strict';
var util = require('util');
var _ = require('lodash');

module.exports = function(app) {
    var db = app.datasources.mongoDs;
    var Business = app.models.Business;

    db.automigrate(function(err) {
        if (err) throw err;
        console.log('\nAutomigrate completed');

        Business.create([{
            name: 'Foo Business',
            location: [43.45, -23.45]
        }, {
            name: 'Bar Business',
            location: {
                lng: 22.857,
                lat: 27.345
            }
        }, {
            name: 'Baz Business',
            location: {
                lng: -32.857,
                lat: 54.345
            }
        }], function(err, result) {
            if (err) throw err;
            console.log('\nCreated instance: ' + util.inspect(result));

            var id = result[1].id;
            var newData = _.cloneDeep(result[1]);
            newData.location = [-23.456, 12.223];

            Business.updateOrCreate(newData, function(err, result) {
                if (err) throw err;
                console.log('\nUpdated instance: ' + util.inspect(result));

                Business.find(function(err, result) {
                    if (err) throw err;
                    console.log('\nFound instance: ' + util.inspect(result));
                })
            });
        });
    });
};
