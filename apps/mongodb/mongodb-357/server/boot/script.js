'use strict';
var util = require('util');

module.exports = function(app) {
  var db = app.dataSources.mongoDs;
  var Order = app.models.Order;

  db.automigrate(function(err) {
    if (err) throw err;

    Order.create({'finished': false,
      'stagesDone': [],
      'stagesToDo': [
        {
          'phaseId': '1',
          'name': 'Stage 1',
          'parentPhases': [],
          'order': 1,
        },
        {
          'phaseId': '2',
          'name': 'Stage 2',
          'parentPhases': [],
          'order': 1,
        },
        {
          'phaseId': '3',
          'name': 'Stage 3',
          'parentPhases': [
            '5682f27471f5739818e8fabf',
          ],
          'order': 2,
        },
        {
          'phaseId': '4',
          'name': 'Stage 4',
          'parentPhases': [
            '5682f20471f5739818e8fabe',
            '5682f27471f5739818e8fabf',
          ],
          'order': 2,
        },
      ]}, function(err, result) {
      if (err) throw err;
      console.log('\nCreate instance: ' + util.inspect(result, 4));
    });
  });
};
