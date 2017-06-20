var DataSource = require('loopback-datasource-juggler').DataSource;
var ModelBuilder = require('loopback-datasource-juggler').ModelBuilder;
var ds = new DataSource('memory');
datas = [];

var Todos = ds.createModel('Todo', {
    title: { type: String, length: 255 }
});

for (var index = 0; index <= 10; index++) {
    datas.push({ title: 'hi ' + index });
}
Todos.create(datas).then((results) => {
    // console.log('created', results)
    return Promise.resolve(results)
});

console.log('\n');

Todos.find( {
 limit: 10,
  order: [ 'title ASC' ],
}).then(results => console.log('results:', results));

//where: {and: [{id: {gt:1}}, {id:{lt:5}}]}