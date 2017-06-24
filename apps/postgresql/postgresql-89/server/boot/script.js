'use strict';
var util = require('util');
var _ = require('lodash');

module.exports = function(app) {
    var db = app.datasources.postgresqlDs;
    var Employee = app.models.Employee;
    
    var date1 = new Date('2016-11-16 11:00');
    var date2 = new Date();

    db.automigrate(function(err) {
        if (err) throw err;
        console.log('\nAutomigrate completed');

        Employee.create([{
            name: 'Foo',
            age: 12,
            joined: date1
        }, {
            name: 'Bar',
            age: 32,
            joined: date2
        }], function(err, result) {
            if (err) throw err;
            console.log('\nCreated instance: ' + util.inspect(result));

            Employee.find({where: {joined: date1}}, function(err, result) {
                if (err) throw err;
                console.log('\nFound instance: ' + util.inspect(result));
            });
        });
    });
};
