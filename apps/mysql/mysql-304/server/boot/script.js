'use strict';
var util = require('util');
var _ = require('lodash');

module.exports = function(app) {
    var db = app.datasources.mysqlDs;
    var Employee = app.models.Employee;

    db.automigrate(function(err) {
        if (err) throw err;
        console.log('\nAutomigrate completed');

        Employee.create([{
            name: 'Foo',
            age: 12,
            reportsTo: ['Bob', 'Sam']
        }, {
            name: 'Bar',
            age: 24,
            reportsTo: ['Sam']
        }, {
            name: 'Baz',
            age: 22,
            reportsTo: ['John', 'Bob']
        }], function(err, result) {
            if (err) throw err;
            console.log('\nCreated instance: ' + util.inspect(result));

            // Employee.find({where: {reportsTo: {inq: ['["Sam"]']}}}, function(err, result) {
            //     if (err) throw err;
            //     console.log('\nFound instance with inq: ' + util.inspect(result));
            // });

            Employee.find({where: {name: {inq: ['Foo', 'Bar']}}}, function(err, result) {
                if (err) throw err;
                console.log('\nFound instance with inq: ' + util.inspect(result));
            });

           // SELECT * FROM Employee WHERE JSON_CONTAINS(reportsTo, '["Sam"]');
        })
    });
};
