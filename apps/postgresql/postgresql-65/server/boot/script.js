'use strict';
var util = require('util');
var _ = require('lodash');

module.exports = function(app) {
    var db = app.datasources.postgresqlDs;

    db.discoverSchemas('book', {schema: 'public', relations: true}, function(err, result) {
        if (err) throw err;
        console.log('\nDiscovered schemas for `Author` and `Book` table: ' + util.inspect(result, {depth:4}));
    });
};
