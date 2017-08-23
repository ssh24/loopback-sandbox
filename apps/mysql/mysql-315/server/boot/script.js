'use strict';
var util = require('util');
var _ = require('lodash');

module.exports = function(app) {
    var db = app.datasources.mysqlDs;
    var Employee = app.models.Employee;

    db.autoupdate(function(err) {
        if (err) throw err;
        console.log('\nAutoupdate completed');

        Employee.create([{
            name: 'Foo-new'
        }, {
            name: 'Bar-new'
        }], function(err, result) {
            if (err) throw err;
            console.log('\nCreated instance: ' + util.inspect(result));
        });
    });
};