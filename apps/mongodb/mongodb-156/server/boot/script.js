'use strict';
var util = require('util');
var _ = require('lodash');

module.exports = function(app) {
    var db = app.datasources.mongoDs;
    var Car = app.models.Car;
    var data = [{
        make: 'Toyota',
        model: 'Corolla',
        year: 2005
    }, {
        make: 'Hondo',
        model: 'Civic',
        year: 2010
    }, {
        make: 'Mercedes Benz',
        model: 'C350',
        year: 2014
    }, {
        make: 'BMW',
        model: 'M3',
        year: 2009
    }, {
        make: 'Toyota',
        model: 'Celica',
        year: 2001
    }]

    db.automigrate(function(err) {
        if (err) throw err;
        console.log('\nAutomigrate complete');

        Car.create(data, function(err, result) {
            if (err) throw err;
            console.log('\nCreated instance: ' + util.inspect(result));

            var car = new Car(result[2]);
            var newData = _.cloneDeep(result[2]);
            newData.model = 'C250';
            newData['$inc'] =  {year: 1};
            car.updateAttributes(newData, {validate: false}, function(err, result) {
                if (err) throw err;
                console.log('\nupdated attributes on: %j', result);
            });
        });
    });
};