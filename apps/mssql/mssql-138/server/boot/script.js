'use strict';
var async = require('async');

module.exports = function(app) {
  var mssqlDs = app.dataSources.mssqlDs;
  var Movies = app.models.Movies;

  mssqlDs.automigrate(function(err) {
    if (err) throw err;
    Movies.create({ContentID: 1, LangID: 1, EntityID: 1},
    function(err, result) {
      if (err) throw err;
      console.log('Result: ' + JSON.stringify(result));
    });
  });
};
