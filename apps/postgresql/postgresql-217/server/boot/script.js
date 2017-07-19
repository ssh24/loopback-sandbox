'use strict';
var util = require('util');
var _ = require('lodash');

module.exports = function(app) {
    var db = app.datasources.postgresqlDs;
    var Employee = app.models.Employee;

    db.autoupdate(function(err) {
        if  (err) throw err;
        console.log('\nAutoupdate completed');
    });

    // db.automigrate(function(err) {
    //     if (err) throw err;
    //     console.log('\nAutomigrate completed');
    // });
};
