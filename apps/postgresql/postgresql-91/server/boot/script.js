'use strict';
var util = require('util');
var _ = require('lodash');

module.exports = function(app) {
    var db = app.datasources.postgresqlDs;
    var Employee = app.models.Employee;

    db.automigrate(function(err) {
        if (err) throw err;
        console.log('\nAutomigrate completed');

        Employee.create([{
            name: 'Foo'
        }, {
            name: 'Bar'
        }, {
            name: 'Baz',
            age: 22
        }], function(err, result) {
            if (err) throw err;
            console.log('\nCreated instance: ' + util.inspect(result));

            Employee.updateOrCreate({id: 1, name: 'Foo', age: 1}, function(err, result) {
                if (err) throw err;
                console.log('\nUpdateOrCreate: ' + util.inspect(result));

                Employee.find(function(err, result) {
                    if (err) throw err;
                    console.log('\nFound instance: ' + util.inspect(result));
                });
            });
        });
    });
};
