'use strict';
var util = require('util');
var _ = require('lodash');

module.exports = function(app) {
    var db = app.datasources.postgresqlDs;
    var Employee = app.models.Employee;

    var d1 = new Date();
    var d2 = new Date('2016-05-10');

    db.automigrate(function(err) {
        if (err) throw err;
        console.log('\nAutomigrate completed');

        Employee.create([{
            name: 'Foo',
            dateJoined: d1
        }, {
            name: 'Bar',
            dateJoined: d2
        }], function(err, result) {
            if (err) throw err;
            console.log('\nCreated instance: ' + util.inspect(result));

            Employee.find(function(err, result) {
                if (err) throw err;
                console.log('\nFound instance: ' + util.inspect(result));
            });
        });
    });
};
