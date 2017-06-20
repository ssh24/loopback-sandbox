'use strict';

module.exports = function(app) {
  var mysqlDs = app.dataSources.mysqlDs;
  var Author = app.models.Author;
  var Book = app.models.Book;

  // first autoupdate the `Author` model
  mysqlDs.autoupdate('Author', function(err) {
    if (err) throw err;
    console.log('\nAutoupdated table `Author`.');

    mysqlDs.autoupdate('Book', function(err) {
      if (err) throw err;
      console.log('\nAutoupdated table `Book`.');

      // at this point the database table `Book` should have one foreign key `authorId` integrated
    });
  });
};
