// 'use strict';

// var _ = require('lodash');
// var assert = require('assert');
// var async = require('async');

// var docs = [{'id': 1, '_rev': '1-f0e8f3bcd29a2254a3c7bc1ec15ec5d8',
//   'name': 'Foo', 'age': 1},
// {'id': 5, '_rev': '1-28de5a4d6741bf64891c7608676d7e59',
//   'name': 'B', 'age': 5},
// {'id': 9, '_rev': '1-29db5976eb69dec5524ae5a65c43b13d',
//   'name': 'F', 'age': 9},
// {'id': 2, '_rev': '1-5efa34e2cdc1b6568312421fe5428a11',
//   'name': 'Bar', 'age': 2},
// {'id': 3, '_rev': '1-28fa980bd6e747baf723cd8a5b720bcd',
//   'name': 'Baz', 'age': 3},
// {'id': 4, '_rev': '1-88d3f4bd1b7ae0114ef1580ee07be791',
//   'name': 'A', 'age': 4},
// {'id': 6, '_rev': '1-fd11c4d9861d2ca41b0386c216fcde2c',
//   'name': 'C', 'age': 6},
// {'id': 7, '_rev': '1-1b0ddc2e8d9e4e5ffd50819e8d0c86e1',
//   'name': 'D', 'age': 7},
// {'id': 8, '_rev': '1-fbb4fa77b0dc6726d32e9efe11ae68e1',
//   'name': 'E', 'age': 8},
// {'id': 12, '_rev': '1-9590360333777d79cc1cc5fa342fae44',
//   'name': 'I', 'age': 22},
// {'id': 10, '_rev': '1-d6635787d56d27e2b3938c59aed72d1f',
//   'name': 'G', 'age': 21},
// {'id': 11, '_rev': '1-092c38c82ca09c5ea0884b27062b667f',
//   'name': 'H', 'age': 12}];

// var datas = [{'id': 1, '_rev': '1-f0e8f3bcd29a2254a3c7bc1ec15ec5d8',
//   'name': 'Foo-change', 'age': 11},
// {'id': 5, '_rev': '1-28de5a4d6741bf64891c7608676d7e59',
//   'name': 'B-change', 'age': 51},
// {'id': 9, '_rev': '1-29db5976eb69dec5524ae5a65c43b13d',
//   'name': 'F-change', 'age': 91}];

// var bulkUpdate = function bulkUpdate(datas, cb) {
//   assert(datas instanceof Array);

//   assert(_.each(datas, function(data) {
//     _.has(data, '_rev');
//   }));

//   var toBeUpdatedList = [];
//   var data = {};
//   // in here we do the get all to get all the docs
//   // do necessary checkings for the docs
//   if (docs.length === 0) return cb(null, {count: 0});

//   async.each(docs, function(doc, cb) {
//     data = _.find(datas, {_rev: doc._rev});
//     if (data) {
//       delete doc._rev;
//       _.mergeWith(doc, data, function(dest, src) { return src; });
//       toBeUpdatedList.push(doc);
//     }
//     cb();
//   }, function(err) {
//     console.log(toBeUpdatedList);
//     return cb(null, toBeUpdatedList);
//   });
// };

// bulkUpdate(datas, function(err, result) {
//   if (err) throw err;
//   console.log('Result: ' + JSON.stringify(result));
// });
