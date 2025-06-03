// Task 2: Basic CRUD Operations

// Write MongoDB queries to:

// Find all books in a specific genre
db.books.find({genre: "Fiction"});

// Find books published after a certain year
   db.books.find({published_year:{$gt:1945}});

// Find books by a specific author
   db.books.find({author: 'George Orwell'});

// Update the price of a specific book
   db.books.updateOne({title: 'The Great Gatsby'}, {$set: {price: 13}});
   
// Delete a book by its title
   db.books.deleteOne({title: 'The Lord of the Rings'});



//    Task 3: Advanced Queries
// Write a query to find books that are both in stock and published after 2010
   db.books.find({in_stock: true, published_year: {$gt: 2010}});

// Use projection to return only the title, author, and price fields in your queries
   db.books.find({}, {title: 1, author: 1, price: 1, _id: 0});

// Implement sorting to display books by price (both ascending and descending)
   db.books.find({}).sort({price: 1});
   db.books.find({}).sort({price: -1});
   
// Use the limit and skip methods to implement pagination (5 books per page)
   db.books.find({}).sort({ _id: 1 }).skip(10).limit(5);



//    Task 4: Aggregation Pipeline
// Create an aggregation pipeline to calculate the average price of books by genre
    db.books.aggregate([{$group: {_id: "$genre", averagePrice: {$avg: "$price"}}}]);

// Create an aggregation pipeline to find the author with the most books in the collection
    db.books.aggregate([{
      $group: {_id: "$author", bookCount: {$sum: 1}}},
      {$sort: {bookCount: -1}},
      {$limit: 1}
    ]);

// Implement a pipeline that groups books by publication decade and counts them
    db.books.aggregate([
      {$project: {decade: {$subtract: ["$published_year", {$mod: ["$published_year", 10]}]}}},
      {$group: {_id: "$decade", bookCount: {$sum: 1}}}
      
    ]);




//     Task 5: Indexing
// Create an index on the title field for faster searches
     db.books.createIndex({title: 1});

// Create a compound index on author and published_year
     db.books.createIndex({author: 1, published_year: 1 });
// Use the explain() method to demonstrate the performance improvement with your indexes
     db.books.find({ author: "George Orwell", published_year: 1945 }).explain("executionStats");

//      Explanation:
// - When we run explain() before indexing  it shows the query performance without indexes ( a full collection scan).
// - After creating indexes, the  explain() shows:
//    - Reduced executionTimeMillis
//    - Fewer totalDocsExamined
//    - Use of the compound index in the query planner
// - This demonstrates that indexing improves query efficiency by limiting the number of documents scanned.