'use strict';

module.exports = function(app) {
  var Expense = app.models.Expense;
  var db = app.dataSources.postgresDs;

  db.automigrate(function(err) {
    if (err) throw err;
    Expense.create(
      [
        {
          date: '2017-04-19T16:15:37.919Z',
          description: 'expense 1',
          amount: 156.99,
        },
        {
          date: '2017-04-19T16:15:37.919Z',
          description: 'expense 2',
          amount: 10,
        },
        {
          date: '2017-04-19T16:15:37.919Z',
          description: 'expense 3',
          comment: 'this is a dumb expense.',
          amount: 12.5,
        },
      ],
      function(err, expenses) {
        if (err) throw err;
        console.log('\nCreated expenses: ' + JSON.stringify(expenses));
        Expense.find(function(err, result) {
          if (err) throw err;
          console.log('\nFind all expenses: ' + JSON.stringify(result));
        });
      }
    );
  });
};
