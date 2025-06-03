[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19672529&assignment_repo_type=AssignmentRepo)
# MongoDB Fundamentals Assignment

This repository contains MongoDB scripts to perform various database operations on a books collection. The scripts cover CRUD operations, aggregation pipelines, indexing, and query performance analysis.

## Activities done

-MongoDB installed (version 4.2 or higher recommended)
-MongoDB Shell (mongo) or MongoDB Compass for running queries
-Access to MongoDB Atlas cluster (optional if using cloud database)

How to Run

1. **Start MongoDB server if running locally:**
mongod

2. **Open MongoDB Shell:**

   ```bash
   mongo
   ```

3. **Switch to your database:**

   ```js
   use plp_bookstore
   ```

4. **Run your scripts:**

   You can run the queries manually inside the shell 


5. **Example Queries:**

    * Example MongoDB queries you can try after running this script:
 *
 * 1. Find all books:
 *    db.books.find()
 *
 * 2. Find books by a specific author:
 *    db.books.find({ author: "George Orwell" })
 *
 * 3. Find books published after 1950:
 *    db.books.find({ published_year: { $gt: 1950 } })
 *
 * 4. Find books in a specific genre:
 *    db.books.find({ genre: "Fiction" })
 *
 * 5. Find in-stock books:
 *    db.books.find({ in_stock: true })

   * Create index on `title`:

     db.books.createIndex({title: 1});
     ```



- [MongoDB Documentation](https://docs.mongodb.com/)
- [MongoDB University](https://university.mongodb.com/)
- [MongoDB Node.js Driver](https://mongodb.github.io/node-mongodb-native/) 