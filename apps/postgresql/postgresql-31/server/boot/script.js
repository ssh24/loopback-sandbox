'use strict';
var util = require('util');
var _ = require('lodash');

module.exports = function(app) {
    var db = app.datasources.postgresqlDs;
    var Business = app.models.Business;
    var orders = app.models.orders;

    db.automigrate(function(err) {
        if (err) throw err;
        console.log('\nAutomigrate completed');

        orders.create([{
            info: {
                customer: 'Lily Bush', 
                items: 
                {
                    product: 'Diaper',
                    qty: 24
                },
            },
        }, {
            info: {
                customer: 'Josh William', 
                items: 
                {
                    product: 'Toy car',
                    qty: 1
                },
            },
        }, {
            info: {
                customer: 'Mary Clark', 
                items: 
                {
                    product: 'Toy train',
                    qty: 2
                },
            },
        }], function(err, result) {
            if (err) throw err;
            console.log('\nCreated instance: ' + util.inspect(result, {depth:4}));
        });
    });
};
