'use strict';
var util = require('util');
var _ = require('lodash');

module.exports = function(app) {
    var db = app.datasources.postgresqlDs;
    var db2 = app.datasources.newDs;

    db.ping(function(err) {
        if (err) throw err;
        console.log('\nPinged first db.');

        db2.ping(function(err) {
            if (err) throw err;
            console.log('\nPinged second db.');
        });
    });
};
