'use strict';
var async = require('async');

module.exports = function(app) {
  var mysqlDs = app.dataSources.mysqlDS;
  var Post = app.models.Post;

  mysqlDs.automigrate(function(err) {
    if (err) throw err;
    Post.create([{title: 'My Post', content: 'Hello'},
    {title: 'my post', content: 'hello'},
    {title: 'my post 2', content: 'hello'},
    {title: 'cy post', content: 'hello'}],
    function(err, result) {
      if (err) throw err;
      console.log('\nCreate: ' + JSON.stringify(result));
      Post.find({where: {title: {regexp: /^M/}}},
      function(err, result) {
        if (err) throw err;
        console.log('\nFind: ' + JSON.stringify(result));
      });
    });
  });
};
