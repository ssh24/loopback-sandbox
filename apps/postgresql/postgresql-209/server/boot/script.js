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
            name: 'Foo',
            age: 1
        }, {
            name: 'Bar',
            age: 1
        }, {
            name: 'Baz'
        }, {
            name: 'Sam'
        }], function(err, result) {
            if (err) throw err;
            console.log('\nCreated instance: ' + util.inspect(result));

            Employee.update({age: 1}, {name: 'Foo', age: 12}, function(err, result) {
                if (err) throw err;
                console.log('\nUpdated instance 1st time: ' + util.inspect(result));

                Employee.update({name: 'Foo'}, {age: 14}, function(err, result) {
                    if (err) throw err;
                    console.log('\nUpdated instance 2nd time: ' + util.inspect(result));
                    
                    Employee.find(function(err, result) {
                    if (err) throw err;
                    console.log('\nFound instance: ' + util.inspect(result));
                    });
                });
            });
        });
    });

    Employee.observe('before save', function (ctx, next) {
        if (ctx.isNewInstance) {
            console.log(">> hook output: new");
        } else {
            console.log(">> hook output: update");
        }
        next();
    });
};
