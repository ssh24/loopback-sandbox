'use strict';
var util = require('util');

module.exports = function(app) {
    var db = app.dataSources.mongoDs;
    var Employee = app.models.Employee;

    db.automigrate(function(err) {
        if (err) throw err;
        console.log('\nAutomigrate completed');

        Employee.create([{
            name: 'Foo',
            age: 1
        }, {
            name: 'Bar',
            age: 2
        }], function(err, result) {
            if (err) throw err;
            console.log('\nCreated instance: ' + util.inspect(result));

            var id1 = result[0].id;
            var id2 = result[1].id;

            Employee.findById(id1, function(err, result) {
                if (err) throw err;
                console.log('\nFindbyid instance: %s %j', id1, result);
            })
        });
    });
};