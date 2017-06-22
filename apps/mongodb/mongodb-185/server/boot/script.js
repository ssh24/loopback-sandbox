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
            name: 'Foo',
            age: 1,
        }, {
            name: 'Bar',
            age: 20
        }], function(err, result) {
            if (err) throw err;
            console.log('\nCreated instance: ' + util.inspect(result));

            var id1 = result[0].id;
            var id2 = result[1].id;

            Employee.findOrCreate({where: {id: 2}}, {name: 'Baz', age: 12}, function(err, result) {
                if (err) throw err;
                console.log('\nFindOrCreate result: ' + util.inspect(result));

                Employee.find(function(err, result) {
                    if (err) throw err;
                    console.log('\nFind instance: ' + util.inspect(result));
                });
            });
        });
    });
};
