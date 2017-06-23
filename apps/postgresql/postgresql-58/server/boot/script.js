'use strict';
var util = require('util');
var _ = require('lodash');

module.exports = function(app) {
    var db = app.datasources.postgresqlDs;
    var Item = app.models.Item;

    db.automigrate(function(err) {
        if (err) throw err;
        console.log('\nAutomigrate completed');

        Item.create([{
            name: 'Calculator',
            price: 12.99
        }, {
            name: 'Chocolate Bar',
            price: 3.49
        }], function(err, result) {
            if (err) throw err;
            console.log('\nCreated instance: ' + util.inspect(result));

            Item.find(function(err, result) {
                if (err) throw err;
                console.log('\nFound instance: ' + util.inspect(result));
                console.log('\n' + parseFloat(result[0].price));
            });
        });
    });
};
