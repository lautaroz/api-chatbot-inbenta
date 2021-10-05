const mysql = require('mysql');

const { DB_HOST, DB_USER, DB_PWD, DATABASE } = process.env;

async function query(query) {
  try {
    const connection = await mysql.createConnection({
      host: DB_HOST,
      user: DB_USER,
      password: DB_PWD,
      connectionLimit: 5,
      database: DATABASE,
    });

    db = await connection.connect();

    const rows = await db.query(query);

    return rows;
  } catch (error) {
    console.log('Error db', error);
  }
}

async function tryConnection() {
  var connection = mysql.createConnection({
    host: 'localhost',
    user: 'dbuser',
    password: 's3kreee7',
  });

  try {
    console.log('🦭  Trying to connect to MariaDB 🦭');
    await connection.connect();
    connection.end();
    console.log('🦭  MariaDB connection ready 🦭');
  } catch (err) {
    console.log('💥  Could not connect to MariaDB 💥');
  }
}

module.exports = {
  query,
  tryConnection,
};
