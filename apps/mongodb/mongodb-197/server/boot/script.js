'use strict';
var util = require('util');
var _ = require('lodash');

module.exports = function(app) {
    var db = app.datasources.mongoDs;
    var Employee = app.models.Employee;

    db.automigrate(function(err) {
        if (err) throw err;
        console.log('\nAutomigrate completed');

        Employee.create([{
            id: 1,
            name: 'Foo',
            age: 28
        }, {
            id: 2,
            name: 'Bar',
            age: 14
        }, {
            id: 3,
            name: 'Baz',
            age: 21
        }], function(err, result) {
            if (err) throw err;
            console.log('\nCreated instance: ' + util.inspect(result));

            Employee.find({where: {age: {inq: [28, 21]}}}, function(err, result) {
                if (err) throw err;
                console.log('\nFound instance: ' + util.inspect(result));
            });
        });
    });
};
