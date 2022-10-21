const db = require('./db/connection');
const Queries = require('./lib/Queries');

// Start server after DB connection
db.connect(err => {
  if (err) throw err;
  console.log('Database connected.');
  new Queries().initializeQueries();
});