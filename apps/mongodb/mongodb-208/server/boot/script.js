'use strict';
var util = require('util');
var _ = require('lodash');

module.exports = function(app) {
    var db = app.datasources.mongoDs;
    var Employee = app.models.Employee;
    var Car = app.models.Car;

    db.automigrate(function(err) {
        if (err) throw err;
        console.log('\nAutomigrate completed');

        Employee.create([{
            id: 1,
            name: 'Foo'
        }, {
            id: 2,
            name: 'Bar'
        }, {
            id: 3,
            name: 'Baz'
        }], function(err, result) {
            if (err) throw err;
            console.log('\nCreated employee instance: ' + util.inspect(result));

            Car.create([{
                make: 'Toyota',
                model: 'Corolla',
                year: 2006
            }, {
                make: 'Honda',
                model: 'Civic',
                year: 2007
            }, {
                make: 'Mercedes Benz',
                model: 'E300',
                year: 2015
            }], function(err, result) {
                if (err) throw err;
                console.log('\nCreated car instance: ' + util.inspect(result));

                var id1 = result[0].id;

                Employee.findById(1, function(err, result) {
                    if (err) throw err;
                    console.log('\nFound employee instance by id: ' + util.inspect(result));

                    Car.findById(id1, function(err, result) {
                        if (err) throw err;
                        console.log('\nFound car instance by id: ' + util.inspect(result));
                    });
                });
            });
        });
    });
};
