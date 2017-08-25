'use strict';

var util = require('util');
var _ = require('lodash');

module.exports = function(app) {
    var db = app.datasources.memoryDs;
    var Employee = app.models.Employee;

    // db.automigrate(function(err) {
    //     if (err) throw err;
    //     console.log('\nAutomigrate completed');

        Employee.validatesUniquenessOf('age');

        // Employee.create([{
        //     name: 'Foo',
        //     age: 1
        // }, {
        //     name: 'Bar',
        //     age: 2
        // }], function(err, result) {
        //     if (err) throw err;
        //     console.log('\nCreated employee instance: ' + util.inspect(result));

            Employee.findOrCreate({where: {age: 1}}, {name: 'Baz', age: 1}, function(err, result) {
                if (err) throw err;
                console.log('\nFindOrCreate employee instance: ' + util.inspect(result));
            });
//         });
//    });
};
