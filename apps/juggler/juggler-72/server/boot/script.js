'use strict';
var util = require('util');
var _ = require('lodash');

module.exports = function(app) {
    var db = app.datasources.mysqlDs;
    var Customer = app.models.Customer;
    var Order = app.models.Order;

    db.automigrate(function(err) {
        if (err) throw err;
        console.log('\nAutomigrate completed');

        db.discoverSchemas('Order', {relations: true}, function(err, result) {
            if (err) throw err;
            console.log('\nSchema discovered: ' + util.inspect(result, {depth: 4}));
        });
    });
};
