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
            title: 'Hello World'
        }, {
            title: 'hello world'
        }, {
            title: 'My Post'
        }, {
            title: 'my post'
        }], function(err, result) {
            if (err) throw err;
            console.log('\nCreated instance: ' + util.inspect(result));

            Post.find({where: {title: {like: 'h%'}}}, function(err, result) {
                console.log('\nFound instance with `like`: ' +  util.inspect(result));

                Post.find({where: {title: {nlike: 'M%'}}}, function(err, result) {
                    console.log('\nFound instance with `like`: ' +  util.inspect(result));
                });
            });
        });
    });
};
