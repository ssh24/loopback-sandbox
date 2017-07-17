'use strict';
var util = require('util');
var _ = require('lodash');

module.exports = function(app) {
    var db = app.datasources.postgresqlDs;

    db.autoupdate(function(err) {
        if (err) throw err;
        console.log('\nAutoupdate completed');
    });
};
