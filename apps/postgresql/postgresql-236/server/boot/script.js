'use strict';
var loopback = require('loopback');
var i = require('util').inspect;
var ds = loopback.createDataSource('postgresql', {
  'host': 'localhost',
  'port': 5432,
  'database': 'postgres',
  'username': 'postgres',
  'password': '',
});

// Discover and build models from books table
ds.discoverAndBuildModels('books', {schema: 'public', relations: true}, function(err, schemas) {
  if (err) console.log('Err: ' + err);
  if (schemas) {
    Object.keys(schemas).forEach(function(key) {
      console.log('working on', key);
    });
  }
});
