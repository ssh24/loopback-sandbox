'use strict';
var util = require('util');
var _ = require('lodash');

module.exports = function(app) {
    var db = app.datasources.postgresqlDs;
    var Item = app.models.Item;

    db.automigrate(function(err) {
        if (err) throw err;
        console.log('\nAutomigrate completed');
    });
};
