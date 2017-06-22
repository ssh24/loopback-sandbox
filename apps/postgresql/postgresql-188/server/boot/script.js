'use strict';
var util = require('util');
var _ = require('lodash');

module.exports = function(app) {
    var db = app.datasources.postgresqlDs;
    var Post = app.models.Post;

    db.automigrate(function(err) {
        if (err) throw err;
        console.log('\nAutomigrate completed');

        Post.create([{
            title: 'AAA',
        }, {
            title: 'aaa'
        }, {
            title: 'BBB'
        }, {
            title: 'bbb'
        }], function(err, result) {
            if (err) throw err;
            console.log('\nCreated instance: ' + util.inspect(result));

            Post.find({where: {title: {ilike: 'a%'}}}, function(err, result) {
                if (err) throw err;
                console.log('\nFound instance with ilike: ' + util.inspect(result));

                Post.find({where: {title: {nilike: 'a%'}}}, function(err, result) {
                    if (err) throw err;
                    console.log('\nFound instance with nilike: ' + util.inspect(result));
                });
            });
        });
    });
};
