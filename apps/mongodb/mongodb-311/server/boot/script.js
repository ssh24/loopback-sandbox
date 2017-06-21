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
            age: 25
        }], function(err, result) {
            if (err) throw err;
            console.log('\nCreated instance: ' + util.inspect(result));
        });
    });
};
