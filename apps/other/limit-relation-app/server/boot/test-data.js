'use strict';

module.exports = function (app) {
  var M1 = app.models.M1;
  var M2 = app.models.M2;
  var M3 = app.models.M3;

  function getName(modelId, index2){
    return "Model - "+modelId+" - index "+ (index2 + 1);
  }

  var m1s = [];
  var m2s = [];
  var m3s = [];

  for(var i=0; i<3; i++){
    m1s.push({name: getName(1, i)});
    for(var j=0; j<3; j++){
      m2s.push({name: getName(2, i*3+ j), m1Id: i+1});
      for(var k=0; k<3; k++){
        m3s.push({name: getName(3, i*3+ j*3 + k), m2Id: i*3+ j+1});
      }
    }
  }

  M1.create(m1s);
  M2.create(m2s);
  M3.create(m3s);

};
