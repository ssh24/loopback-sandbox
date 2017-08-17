'use strict';

module.exports = function(M1) {
  M1.callWithoutLimit = function(id, callback) {
    console.log(id);
    M1.findOne({
      where: {id: id},
      include: [
        {
          relation: 'm2s',
          scope: {
            include: {
              relation: 'm3s'
            }
          },
        }
      ]
    }, callback);
  };

  M1.remoteMethod(
    'callWithoutLimit',
    {
      http: { verb: 'get' },
      accepts: { arg: 'id', type: 'number', required: true },
      returns: { arg: 'results', type: [ 'array' ], root: true }
    }
  );

  M1.callWithLimit = function(id, callback) {
    console.log(id);
    M1.findOne({
      where: {id: id},
      include: [
        {
          relation: 'm2s',
          scope: {
            include: {
              relation: 'm3s',
              scope: {
                limit: 1
              }
            }
          },
        }
      ]
    }, callback);
  };

  M1.remoteMethod(
    'callWithLimit',
    {
      http: { verb: 'get' },
      accepts: { arg: 'id', type: 'number', required: true },
      returns: { arg: 'results', type: [ 'array' ], root: true }
    }
  );

};
