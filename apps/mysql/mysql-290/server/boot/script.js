'use strict';
var util = require('util');

module.exports = function(app) {
  var db = app.dataSources.mysqlDs;
  var Business = app.models.Business;

  function findAndUpdate() {
    // find all instances of the model we'd like to migrate
    Business.find({}, function(err, businesses) {
      businesses.forEach(function(businessInstance) {
        // what we fetch back from the db is wrong, so need to revert it here
        var newLocation = {lng: businessInstance.address.lat, lat: businessInstance.address.lng};
        // only update the GeoPoint property for the model
        businessInstance.updateAttribute('address', newLocation, function(err, inst) {
          if (err)
            console.log('update attribute failed ', err);
          else
        console.log('updateAttribute successful');
        });
      });
    });
  }

  findAndUpdate();

 // db.automigrate(function(err) {
  //  if (err) throw err;

//   console.log('\nAutomigrate complete');
//   Business.create([{
//     id: 1,
//     name: 'Apple Inc.',
//     address: {
//       lat: 43.761539,
//       lng: -79.411079,
//     },
//   }, {
//     id: 2,
//     name: 'Microsoft Inc.',
//     address: {
//       lat: 34.761539,
//       lng: -59.411868,
//     },
//   }], function(err, result) {
//     if (err) throw err;
//     console.log('\nCreated instance: ' + util.inspect(result, 4));

//     Business.find(function(err, result) {
//       if (err) throw err;
//       console.log('\nFound instance: ' + util.inspect(result, 4));
//     });
//   });
 // });
};
