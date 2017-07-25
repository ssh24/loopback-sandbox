'use strict';
var util = require('util');
var _ = require('lodash');

module.exports = function(app) {
    var db = app.datasources.postgresqlDs;
    var Employee = app.models.Employee;

    db.automigrate(function(err) {
        if (err) throw err;
        console.log('\nAutomigrate completed');

        db.discoverModelProperties('employee', {schema: 'public'}, 
            function(err, result) {
                if (err) throw err;
                console.log('\nDiscovered properties: ' + util.inspect(result));
        });
    });
};
