'use strict';
var util = require('util');
var _ = require('lodash');

module.exports = function(app) {
    var db = app.datasources.postgresqlDs;
    var City = app.models.City;

    db.discoverSchemas('city', {schema: 'public'}, function(err, result) {
        if (err) throw err;
        console.log('\nModel definition: ' + util.inspect(result, {depth: 10}));
    });

    // db.automigrate(function(err) {
    //     if (err) throw err;
    //     console.log('\nAutomigrate completed');

    //     db.discoverModelProperties('city', function(err, props) {
    //         if (err) throw err;
    //         console.log('\nModel properties: ' + util.inspect(props));
    //     });
    // });
};
