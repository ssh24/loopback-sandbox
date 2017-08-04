'use strict';
var util = require('util');
var _ = require('lodash');

module.exports = function(app) {
    var db = app.datasources.mysqlDs;
    var Employee = app.models.Employee;

    db.automigrate(function(err) {
        if (err) throw err;
        console.log('\nAutomigrate completed');

        db.discoverSchemas('Car', function(err, result) {
            if (err) throw err;
            console.log('\nSchemas: ' + util.inspect(result, {depth: 10}));
        });

        // Employee.create([{
        //     age: 1,
        // }, {
        //     age: 2
        // }], function(err, result) {
        //     if (err) throw err;
        //     console.log('\nCreated instance: ' + util.inspect(result));

        //     Employee.find(function(err, result) {
        //         if (err) throw err;
        //         console.log('\nFind instance: ' + util.inspect(result));
        //     });
        // });
    });
};
