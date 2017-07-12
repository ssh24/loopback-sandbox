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
            age: 12
        }, {
            name: 'Bar',
            age: 25
        }, {
            name: 'Baz'
        }], function (err, result) {
            if (err) throw err;
            console.log('\nCreated instance: ' + util.inspect(result));

            db.autoupdate(function(err) {
                if (err) throw err;

                console.log('\nAutoupdate complete');
            });
        });
    });
};
