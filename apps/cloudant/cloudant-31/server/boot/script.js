'use strict';
var async = require('async');

module.exports = function(app) {
  var db = app.dataSources.cloudantDS;
  var Employee = app.models.Employee;
  var Employee2 = app.models.Employee2;

  // Employee2.replaceById(23, {
  //   '_rev': '57-94d5cb4671df71c408a72d7e885069e2',
  //   'name': 'Sony',
  //   'age': 25,
  // }, function(err, result) {
  //   if (err) throw err;
  //   console.log('\nCreated instance: ' + JSON.stringify(result));
  // });
  var rev;
  db.once('connected', function() {
    db.automigrate(function(err) {
      if (err) {
        throw err;
      }
      Employee2.create([{
        id: 1,
        name: 'Foo',
        age: 45,
      }, {
        id: 2,
        name: 'Bar',
        age: 27,
      }, {
        id: 3,
        name: 'Sakib',
        age: 22,
      }], function(err, result) {
        if (err) throw err;
        rev = result[0]._rev;
        console.log('\nCreated instance2: ' + JSON.stringify(result));
        // Employee2.replaceById(3, {
        //   id: 3,
        //   name: 'Sakib2',
        //   age: 22,
        // }, function(err, result) {
        //   if (err) throw err;
        //   console.log('\nreplaceById: ' +
        //   JSON.stringify(result));
        //   rev = result._rev;
        //   Employee2.replaceOrCreate({
        //     id: 4,
        //     name: 'Sakib',
        //     age: 23,
        //     _rev: rev,
        //   }, function(err, result) {
        //     if (err) throw err;
        //     console.log('\nupdateOrCreate as update: ' +
        //   JSON.stringify(result));
        //     Employee2.find(function(err, result) {
        //       if (err) throw err;
        //       console.log('\nfind: ' + JSON.stringify(result));
        //     });
          // });
        Employee2.updateAll({id: 1}, {
          id: 1,
          name: 'Foo',
          age: 46,
          _rev: rev,
        }, function(err, result) {
          if (err) throw err;
          rev = result._rev;
          console.log('updateAll: ' +
            JSON.stringify(result));
        });
          //   Employee2.updateOrCreate({id: 23, name: 'Sony', age: 22},
          // function(err, result, newInstance) {
          //   if (err) throw err;
          //   console.log('\nupdateOrCreate as create: ' +
          //   JSON.stringify(result));
          //   Employee2.updateOrCreate({id: 23, name: 'Sony', age: 25},
          // function(err, result, newInstance) {
          //   if (err) throw err;
          //   console.log('updateOrCreate as update: ' +
          //   JSON.stringify(result));
          //   Employee2.replaceById(2, {
          //     '_rev': rev,
          //     'name': 'Joya',
          //     'age': 29,
          //   }, function(err, result) {
          //     if (err) throw err;
          //     console.log('\nreplaceById: ' + JSON.stringify(result));
      });
    });
  });
    //});
 // });
  //     });
  //   });
  // });
};
