'use strict';
var async = require('async');

module.exports = function(app) {
  var mysqlDB = app.dataSources.mysqlDS2;
  // var lbTables = ['User', 'ACL', 'RoleMapping', 'Role'];

  mysqlDB.autoupdate(function(err) {
    if (err) {
      throw err;
    }
    console.log('Successfully autoupdated.');
    // console.log('Loopback tables [' + lbTables + '] created in '
    // , mysqlDB.adapter.name);
    // mysqlDB.disconnect();
  });
};
