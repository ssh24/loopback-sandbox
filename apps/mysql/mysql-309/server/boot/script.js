'use strict';
var util = require('util');
var _ = require('lodash');

module.exports = function(app) {
    var db = app.datasources.mysqlDs;
    var Post = app.models.Post;

    db.automigrate(function(err) {
        if (err) throw err;
        console.log('\nAutomigrate completed');

        Post.create([{
            title: 'post 1',
            content: 'abc word1 word2 xyz'
        }, {
            title: 'post 2',
            content: 'abc word2 word3 xyz'
        }], function(err, result) {
            if (err) throw err;
            console.log('\nCreated instance: ' + util.inspect(result));

            Post.find({where: {content: {like: '%word1 word2%'}}}, function(err, result) {
                if (err) throw err;
                console.log('\nFound instance: ' + util.inspect(result));
            });
        });
    });
};
