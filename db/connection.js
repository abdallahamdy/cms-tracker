const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: '12345678',
      database: 'cms_tracker_db'
    },
    console.log('Connected to the cms_tracker_db database.')
);


module.exports = db;