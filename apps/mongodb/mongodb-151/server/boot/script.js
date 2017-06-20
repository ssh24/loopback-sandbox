'use strict';
var util = require('util');
var _ = require('lodash');

module.exports = function(app) {
    var db = app.datasources.mongoDs;
    var Post = app.models.Post;

    db.automigrate(function(err) {
        if (err) throw err;
        console.log('\nAutomigrate completed');

        Post.create([{
            title: 'Hello World'
        }, {
            title: 'Liverpool Football Club'
        }, {
            title: 'hello world'
        }], function(err, result) {
            if (err) throw err;
            console.log('\nCreated instance: ' + util.inspect(result));

            Post.find({where: {title: {like: 'H.', options: 'i'}}}, function(err, result) {
                if (err) throw err;
                console.log('\nFound instance: ' + util.inspect(result));
            });
        });
    });
};