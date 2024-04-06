import mariadb from 'mariadb';
const pool = mariadb.createPool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

pool
  ? console.log('succesfull connection to db')
  : console.log('connection to db failed');

export default pool;