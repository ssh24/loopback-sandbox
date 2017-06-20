'use strict';
var util = require('util');

module.exports = function(app) {
  var db = app.dataSources.mysqlDs;

  db.automigrate(function(err) {
    if (err) throw err;

    db.connector.execute('select ? from Business;', ['name'], function(err, result) {
      if (err) throw err;
      console.log('\nExecute: ' + util.inspect(result));
    });
  });
};
