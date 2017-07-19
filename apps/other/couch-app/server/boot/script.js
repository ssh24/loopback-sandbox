'use strict';

var assert = require('assert');
var util = require('util');
var _ = require('lodash');

module.exports = function(app) {
  var db = app.datasources.couchDs;
  var Employee = app.models.Employee;

  var id;
  var nameToBeUpdated = 'Foo-update';

  db.automigrate(function(err) {
    assert(!err);
    console.log('\nAutomigrate complete');

    // create some model instances
    Employee.create([{
      name: 'Foo',
    }, {
      name: 'Bar',
    }, {
      name: 'Baz',
    }], function(err, result) {
      assert(!err);
      assert(result);
      assert.equal(result.length, 3);
      id = result[0].id;
      console.log('\nCreated instances: ' + util.inspect(result));

      // update a model instance
      Employee.update({name: 'Foo'}, {name: nameToBeUpdated},
        function(err, result) {
          assert(!err);
          assert(result);
          assert(result.count);
          assert.equal(result.count, 1);
          console.log('\nUpdated instance: ' + util.inspect(result));

          // find model instances
          Employee.find(function(err, result) {
            assert(!err);
            assert(result);
            var check = _.find(result, function(res) {
              return res.name = nameToBeUpdated;
            });
            assert(check);
            assert.equal(check.name, nameToBeUpdated);
            console.log('\nFound instances: ' + util.inspect(result));

            // delete a instance
            Employee.destroyAll({id: id}, function(err, result) {
              assert(!err);
              assert(result);
              assert(result.count);
              assert.equal(result.count, 1);
              console.log('\nDestroyed instance: ' + util.inspect(result));

             // find model instances
              Employee.find(function(err, result) {
                assert(!err);
                assert(result);
                assert.equal(result.length, 2);
                console.log('\nFound instances: ' + util.inspect(result));
              });
            });
          });
        });
    });
  });
};
