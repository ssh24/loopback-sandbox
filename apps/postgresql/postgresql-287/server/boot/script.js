'use strict';
var util = require('util');
var _ = require('lodash');

module.exports = function(app) {
    var db = app.datasources.postgresqlDs;
    var Employee = app.models.Employee;
    var Employee1 = app.models.Employee1;

    db.autoupdate(function(err) {
        if (err) throw err;
        console.log('\nAutomigrate completed');
    });
};
