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
            age: 1
        }, {
            name: 'Bar',
            age: 2
        }], function(err, result) {
            if (err) throw err;
            console.log('\nCreated instance: ' + util.inspect(result));

            Employee.find(function(err, result) {
                if (err) throw err;
                console.log('\nFound instance before update: ' + util.inspect(result));
                
                var employeeInstance = new Employee(result[0]);
                var newData = _.cloneDeep(result[0]);
                newData.name = 'Foo-updated';
                console.log('\nData to be updated: %j', newData);

                employeeInstance.updateAttributes(newData, {validate: false},function(err, result) {
                    if (err) throw err;
                    console.log('\nUpdateAttribute on instance 1: %j', result);

                    Employee.find(function(err, result) {
                        if (err) throw err;
                        console.log('\nFound instance after update: ' + util.inspect(result));
                    });
                });
            });
        });
    });
};