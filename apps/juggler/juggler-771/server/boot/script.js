'use strict';
var util = require('util');
var _ = require('lodash');

module.exports = function(app) {
    var db = app.datasources.mysqlDs;
    var Employee = app.models.Employee;

    var id;

    db.automigrate(function(err) {
        if (err) throw err;
        console.log('\nAutomigrate completed');

        // set validation
        Employee.validatesLengthOf('name', {min: 5});

        Employee.create([{
            name: 'Abcdef',
            age: 1
        }, {
            name: 'Ghijkl',
            age: 12
        }], function(err, result) {
            if (err) throw err;
            console.log('\nCreated instance: ' + util.inspect(result));

            id = result[0].id;

            Employee.updateAll({id: id}, {name: 'Foo'}, function(err, result) {
                if (err) throw err;
                console.log('\nUpdated instance: ' + util.inspect(result));

                Employee.find(function(err, result) {
                    if (err) throw err;
                    console.log('\nFound instances: ' + util.inspect(result));
                });
            });
        });
    });
};
